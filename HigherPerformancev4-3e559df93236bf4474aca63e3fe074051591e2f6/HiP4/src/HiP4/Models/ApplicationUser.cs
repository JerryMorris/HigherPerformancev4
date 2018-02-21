using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace HiP4.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Posts> Post { get; set; }
        public ICollection<Replies> Reply { get; set; }
        public ICollection<User> Users { get; set; }
    }
}
