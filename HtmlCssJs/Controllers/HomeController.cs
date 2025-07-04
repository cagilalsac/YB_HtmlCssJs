using System.Diagnostics;
using HtmlCssJs.Models;
using Microsoft.AspNetCore.Mvc;

namespace HtmlCssJs.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        // home/welcome
        // controller/action
        public IActionResult Welcome()
        {
            return View();
        }

        // home/isim?ad=çaðýl&soyad=alsaç
        public IActionResult Isim(string ad, string soyad)
        {
            return Content("Ad: " + ad + "Soyad: " + soyad);
        }

        // home/login
        public IActionResult Login(string email, string password, string rememberme)
        {
            return Content("<label style=\"color:red\">Welcome " + email + "</label>", "text/html");
        }
    }
}
