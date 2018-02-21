using System;
using System.Collections.Generic;
using HiP4.Models;

namespace HiP4.Services
{
    public interface IRepliesService
    {
        List<Replies> GetActiveReplies();
        List<Replies> GetAllReplies();
        List<Replies> GetPostReplies(int id);
        List<Replies> GetRepliesToReply(int id);
        Replies GetReply(int id);
        List<Replies> GetUserReplies(string id);
        void SaveReply(Replies reply);
        void SaveReplyToReply(Replies reply);
        void UpdateReply(Replies reply);
        void SaveReply(Replies reply, string user, bool isActive, DateTime timeCreated);
        void SaveReply(Replies reply, bool isActive, DateTime timeCreated);
    }
}