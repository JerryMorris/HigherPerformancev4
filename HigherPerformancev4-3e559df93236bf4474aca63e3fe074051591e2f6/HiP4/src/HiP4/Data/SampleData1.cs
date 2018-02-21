using System;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Threading.Tasks;
using HiP4.Models;

namespace HiP4.Data
{
    public class SampleData1
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var db = serviceProvider.GetService<ApplicationDbContext>();

            if (!db.Topic.Any())
            {
                db.Topic.AddRange(
                    new Topics { Title = "General" },
                    new Topics { Title = " Body" },
                    new Topics { Title = " Electrical" },
                    new Topics { Title = " Engine" },
                    new Topics { Title = "Interior" },
                    new Topics { Title = "Suspension" },
                    new Topics { Title = "Wheels And Tires" },
                    new Topics { Title = "Sell or Trade" },
                    new Topics { Title = "Photos" }
                    );
                db.SaveChanges();

                db.Post.AddRange(
                    new Posts { Title = "Car won't Start", Category = "General", Message = "Car won't start when it is cold outside?", TopicId = 1 },
                    new Posts { Title = "I have a dent in my hood", Category = "Body", Message = "Fat girl sat on my hood now I have a dent how can I fix this?", TopicId = 2 }
                );

                db.SaveChanges();
            }
        }
    }
}
