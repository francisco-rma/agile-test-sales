using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Sales;
using Sales.Models;
using Sales.Repositories;
using Sales.Requests;
using Sales.Responses;
using System.Reflection;

namespace Sales.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SalesController : ControllerBase
    {

        [HttpGet(Name = "GetSales")]
        public IActionResult Get()
        {
            Repository _repository = new();
            SalesResponse response = new();
            response.listCategories = _repository.ReadCategories();
            response.listProducts = _repository.ReadProducts();
            response.listBrands = _repository.ReadBrands();
            response.listSales = _repository.ReadSales();

            return Ok(response);
        }
    }
}