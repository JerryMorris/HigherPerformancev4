using HiP4.Models;
using HiP4.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace HiP4.Services
{
    public class UserService: IUserService
    {
        private IGenericRepository _repo;
        public UserService(IGenericRepository repo)
        {
            _repo = repo;
        }

        public List<User> GetAllUsers()
        {
            var users = _repo.Query<User>().ToList();
            return users;
        }

        public void SaveUser(User user, string id)
        {
            var users = _repo.Query<ApplicationUser>().Where(u => u.Id == id).FirstOrDefault();
            _repo.Add(users);
            _repo.SaveChanges();
        }
    }
}
