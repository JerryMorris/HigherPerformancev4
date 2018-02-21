using System.Collections.Generic;
using HiP4.Models;

namespace HiP4.Services
{
    public interface IUserService
    {
        List<User> GetAllUsers();
        void SaveUser(User user, string id);
    }
}