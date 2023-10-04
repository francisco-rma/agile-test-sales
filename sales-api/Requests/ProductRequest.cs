using System.ComponentModel.DataAnnotations;

namespace Sales.Requests
{
    public class ProductRequest
    {
        [Required]
        public int idCategory { get; set; }
        public string productName { get; set; }
    }
}
