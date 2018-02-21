using HiP4.Models;
using HiP4.Repositories;
using HiP4.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HiP4.Services
{
    public class PostService : IPostService
    {
        private IGenericRepository _repo;
        public PostService(IGenericRepository repo)
        {
            _repo = repo;
        }

        //resturn all acitve post
        public List<Posts> GetActivePost()
        {
            var posts = _repo.Query<Posts>().Where(p => p.IsActive == true).ToList();
            return posts;

        }

        public List<Posts> GetPostByTopicId(int topicId)
        {
            var posts = _repo.Query<Posts>().Where(p => p.TopicId == topicId).Where(p => p.IsActive == true).ToList();

            return posts;
        }
        //get user post
        public List<Posts> GetUserPosts(string id)
        {
            var posts = _repo.Query<Posts>().Where(p => p.User == id).Where(p => p.IsActive == true).ToList();


            return posts;
        }

        //return all posts
        public List<Posts> GetAllPosts()
        {
            var posts = _repo.Query<Posts>().ToList();
            return posts;
        }

        public Posts GetPost(int postId)
        {

            var post = _repo.Query<Posts>().Where(p => p.Id == postId).FirstOrDefault();

            return post;
        }
        //create a new user post
        public void SavePost(Posts post, string id)
        {
            var user = _repo.Query<ApplicationUser>().Where(u => u.Id == id).Include(u => u.Post).FirstOrDefault();
            _repo.Add(post);
            _repo.SaveChanges();
        }
        public void SaveReply(Replies reply, int id)
        {
            var post = _repo.Query<Posts>().Where(p => p.Id == id).FirstOrDefault();

            _repo.Add(post);
            _repo.SaveChanges();
        }

        public void UpdatePost(Posts post)
        {
            
            _repo.Update(post);
            _repo.SaveChanges();
        }

        public void DeletePost(int id)
        {
            var postToDelete = _repo.Query<Posts>().FirstOrDefault(p => p.Id == id);
            _repo.Delete(postToDelete);
            _repo.SaveChanges();

        }

        
    }
}