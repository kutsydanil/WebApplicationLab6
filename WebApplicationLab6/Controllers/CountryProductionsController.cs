using CinemaCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace WebApplicationLab6.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CountryProductionsController : Controller
    {
        private readonly CinemaContext _context;

        public CountryProductionsController(CinemaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<CountryProductions> Get()
        {
            return _context.CountryProductions.AsEnumerable();
        }
    }
}
