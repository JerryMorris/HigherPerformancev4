using System.Collections.Generic;
using HiP4.Models;

namespace HiP4.Services
{
    public interface IPostService
    {
        void DeletePost(int id);
        List<Posts> GetActivePost();
        List<Posts> GetAllPosts();
        Posts GetPost(int postId);
        List<Posts> GetPostByTopicId(int topicId);
        List<Posts> GetUserPosts(string id);
        void SavePost(Posts post, string id);
        void SaveReply(Replies reply, int id);
        void UpdatePost(Posts post);
    }
}