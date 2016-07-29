using System.Collections.Generic;
using HiP4.Models;

namespace HiP4.Services
{
    public interface IPostService
    {
        void DeletePost(int id);
        List<Posts> GetActivePost();
        List<Posts> GetAllPosts();
        Posts GetPost(int id);
        List<Posts> GetUserPosts(string id);
        void SavePost(Posts post, string id);
        
    }
}