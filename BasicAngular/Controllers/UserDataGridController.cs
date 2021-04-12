using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BasicAngular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserDataGridController : ControllerBase
    {
        private readonly ILogger<UserDataGridController> _logger;
        private ApplicationContext _context;
        private readonly List<UserData> _users;
        public UserDataGridController(ApplicationContext context, ILogger<UserDataGridController> logger)
        {
            _logger = logger;
            _context = context;
            _users = new List<UserData>();
            InitDataInDB();
        }

        private void InitDataInDB()
        {
            if (_context.Users.Any())
            {
                return;
            }
            ;

            _context.Users.Add(new UserData() { FirstName = "bob", LastName = "dale", Age = 12, IsActive = true, Email = "bob_dale@test.com", Role = "user" });
            _context.Users.Add(new UserData() { FirstName = "dod", LastName = "dape", Age = 22, IsActive = false, Email = "dod_dape@test.com", Role = "admin" });


            _context.Users.Add(new UserData() { FirstName = "kob", LastName = "dare", Age = 32, IsActive = true, Email = "kob_dare@test.com", Role = "manage" });


            _context.Users.Add(new UserData() { FirstName = "tob", LastName = "dawe", Age = 42, IsActive = false, Email = "tob_dawe@test.com", Role = "user" });


            _context.Users.Add(new UserData() { FirstName = "rob", LastName = "daqe", Age = 52, IsActive = true, Email = "rob_daqe@test.com", Role = "manager" });

            _context.Users.Add(new UserData() { FirstName = "nob", LastName = "dafe", Age = 62, IsActive = true, Email = "nob_dage@test.com", Role = "user" });
            _context.SaveChanges();


        }
        [HttpGet]
        public IEnumerable<UserData> Get()
        {
            return _context.Users.ToArray<UserData>();
        }

        [HttpGet("{id}")]
        public UserData Get(int id)
        {
            return _context.Users.FirstOrDefault(u => u.ID == id);
        }

        [HttpPost]
        public IActionResult Post(UserData user)
        {
            if (ModelState.IsValid)
            {
                _context.Add(user);
                _context.SaveChanges();
                return Ok(user);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (ModelState.IsValid)
            {
               var user = _context.Users.FirstOrDefault(el => el.ID == id);
                if (user == null)
                    return BadRequest("invalid user id");

                _context.Users.Remove(user);
                _context.SaveChanges();
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(UserData user)
        {
            if (ModelState.IsValid)
            {
                _context.Update(user);
                _context.SaveChanges();
                return Ok(user);
            }
            return BadRequest(ModelState);
        }
    }
}
