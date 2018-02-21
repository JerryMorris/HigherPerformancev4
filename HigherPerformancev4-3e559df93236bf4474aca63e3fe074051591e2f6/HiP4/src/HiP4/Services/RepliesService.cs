using HiP4.Models;
using HiP4.Repositories;
using HiP4.Services;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HiP4.Services
{
    public class RepliesService : IRepliesService
    {
        private IGenericRepository _repo;
        public RepliesService(IGenericRepository repo)
        {
            _repo = repo;
        }

        //return all active replies
        public List<Replies> GetActiveReplies()
        {
            var replies = _repo.Query<Replies>().Where(r => r.IsActive == true).ToList();
            return replies;
        }

        //return user replies
        public List<Replies> GetUserReplies(string id)
        {
            var user = _repo.Query<ApplicationUser>().Where(u => u.Id == id).Include(u => u.Reply).FirstOrDefault();
            user.Reply = user.Reply.Where(r => r.IsActive == true).ToList();
            var replys = user.Reply.ToList();
            return replys;
        }

        //retrun all replies
        public List<Replies> GetAllReplies()
        {
            var replies = _repo.Query<Replies>().ToList();
            return replies;
        }

        //retrun all replies to posts
        public List<Replies> GetPostReplies(int id)
        {
            var replies = _repo.Query<Replies>().Where(r => id == r.PostId).ToList();
            return replies;
        }

        public List<Replies> GetRepliesToReply(int id)
        {
            var replies = _repo.Query<Replies>().Where(r => id == r.ReplyId).ToList();
            return replies;
        }

        public Replies GetReply(int id)
        {
            var reply = _repo.Query<Replies> ().Where(r => id == r.Id).FirstOrDefault();
            return reply; 
        }


        //create user reply

        public void SaveReply(Replies reply)
        {
            var replys = _repo.Query<Posts>().Where(p => p.Id == reply.PostId).ToList();
            
            _repo.Add(reply);
            _repo.SaveChanges();
        }

        public void UpdateReply(Replies reply)
        {
            _repo.Update(reply);
            _repo.SaveChanges();
        }

        //create user reply to reply

        public void SaveReplyToReply(Replies reply)
        {
            var replys = _repo.Query<Posts>().Where(r => r.Id == reply.ReplyId).ToList();

            _repo.Add(reply);
            _repo.SaveChanges();
        }

        public void SaveReply(Replies reply, string user, bool isActive, DateTime timeCreated)
        {
            throw new NotImplementedException();
        }

        public void SaveReply(Replies reply, bool isActive, DateTime timeCreated)
        {
            throw new NotImplementedException();
        }
    }


}

