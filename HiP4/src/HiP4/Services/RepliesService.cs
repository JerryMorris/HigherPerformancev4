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

        //create user reply

        public void SaveReply(Replies reply, int id)
        {
            var replys = _repo.Query<Replies>().Where(p => p.Id == id).Include(p => p.Title).FirstOrDefault();

            _repo.Add(replys);
            _repo.SaveChanges();
        }
    }


}

