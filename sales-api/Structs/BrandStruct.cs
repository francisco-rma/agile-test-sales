using Sales.Models;

namespace Sales.Structs
{
    public class BrandStruct
    {
        public BrandStruct()
        {
            listSale = new();
        }
        public List<Sale> listSale { get; set; }
    }
}
