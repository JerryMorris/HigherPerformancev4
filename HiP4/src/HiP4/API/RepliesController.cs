using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HiP4.Data;
using HiP4.Models;
using Microsoft.EntityFrameworkCore;
using HiP4.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HiP4.API
{
    [Route("api/[controller]")]
    public class RepliesController : Controller
    {
        private IRepliesService _service;
        private readonly UserManager<ApplicationUser> _userManager;
        public RepliesController(IRepliesService service, UserManager<ApplicationUser> userManager)
        {
            _service = service;
            _userManager = userManager;
        }
        // GET: api/values
        [HttpGet]
        [Route ("getactivereplies")]
        public IActionResult GetActiveReplies()
        {
            var replies = _service.GetActiveReplies();
            return Ok(replies);
        }

        [HttpGet]
        [Route ("getuserreplies")]
        [Authorize]
        public IActionResult GetUserReplies()
        {
            var userId = _userManager.GetUserId(this.User);
            var replies =_service.GetUserReplies(userId);
            return Ok(replies);
        }

        [HttpGet]
        [Route ("getallreplies")]
        [Authorize(Policy = "AdminOnly")]
        public IActionResult GetAllReplies()
        {
            var replies = _service.GetAllReplies();
            return Ok(replies);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost()]
       // [Authorize]
        public IActionResult Post([FromBody]Replies reply)
        {
            //var userId = _userManager.GetUserId(this.User);
            //reply.User = userId;
            //reply.IsActive = true;
            //reply.TimeCreated = DateTime.Today;
            _service.SaveReply(reply, reply.PostId);

            return Ok(reply);
        }
        //if (reply.Id == 0)
        //{

        //    var userId = _userManager.GetUserId(this.User);

        //    reply.User = userId;
        //    reply.IsActive = true;
        //    reply.TimeCreated = DateTime.Today;


        //}





        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
