using Sales.Models;
using Sales.Structs;

namespace Sales.Responses
{
    public class SalesResponse : ReturnStruct
    {
        public SalesResponse()
        {
            listCategories = new();
            listProducts = new();
            listBrands = new();
            listSales = new();
        }

        public List<Category> listCategories { get; set; }
        public List<Product> listProducts { get; set; }
        public List<Brand> listBrands { get; set; }
        public List<Sale> listSales { get; set; }
    }
}
