using System.ComponentModel.DataAnnotations;

namespace Sales.Requests
{
    public class BrandRequest
    {
        [Required]
        public int idProduct { get; set; }
        public string brandName { get; set; }
    }
}
