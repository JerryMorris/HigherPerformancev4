using System.Collections.Generic;
using HiP4.Models;

namespace HiP4.Services
{
    public interface IRepliesService
    {
        List<Replies> GetActiveReplies();
        List<Replies> GetAllReplies();
        List<Replies> GetUserReplies(string id);
        void SaveReply(Replies reply, int id);
    }
}