using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HiP4.Data;
using HiP4.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using HiP4.Services;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HiP4.API
{

    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        private IPostService _service;
        private readonly UserManager<ApplicationUser> _userManager;

        public PostsController(IPostService service, UserManager<ApplicationUser> userManager)
        {
            _service = service;
            _userManager = userManager;
        }
        // GET: api/values
        [HttpGet]
        [Route("getactiveposts")]
        public IActionResult Get()
        {
            var post = _service.GetActivePost();
            return Ok(post);
        }

        [HttpGet]
        [Route("getuserposts")]
        [Authorize]
        public IActionResult GetUserPosts()
        {
            var userId = _userManager.GetUserId(this.User);
            var posts = _service.GetUserPosts(userId);
            return Ok(posts);
        }

        [HttpGet]
        [Route("getallposts")]
        [Authorize(Policy = "AdminOnly")]
        public IActionResult GetAllPosts()
        {
            var posts = _service.GetAllPosts();
            return Ok(posts);
        }
        // GET api/values/5
        [HttpGet("{id}")]
        [Route("getpost")]
        public IActionResult GetPost(int id)
        {

            var post = _service.GetPost(id);
            return Ok(post);
        }

        // POST api/values
        [HttpPost]
        [Authorize]
        public IActionResult Post(int id,[FromBody]Posts post)
        {

            if (post.Id == 0)
            {
                switch (post.Category)
                {
                    case "General":
                        post.TopicId = 1;
                        break;
                    case "Body":
                        post.TopicId = 2;
                        break;
                    case " Chassis":
                        post.TopicId = 3;
                        break;
                    case "Drive Train":
                        post.TopicId = 4;
                        break;
                    case "Electrical":
                        post.TopicId = 5;
                        break;
                    case "Engine":
                        post.TopicId = 6;
                        break;
                    case "Interior":
                        post.TopicId = 7;
                        break;
                    case "Suspension":
                        post.TopicId = 8;
                        break;
                    case "Wheels and Tires":
                        post.TopicId = 9;
                        break;
                    case "Sell ot Trade":
                        post.TopicId = 10;
                        break;
                    case "Photos":
                        post.TopicId = 11;
                        break;
                    default:
                        post.TopicId = 1;
                        break;
                }
                var userId = _userManager.GetUserId(this.User);
                post.User = userId;
                post.IsActive = true;
                post.TimeCreated = DateTime.Today;

                _service.SavePost(post, post.User);
            }
           



            return Ok(post);
        }

       
        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
             _service.DeletePost(id);
           
           
        }
    }
}

