namespace PMS.Models
{
    public  class Response
    {
        public  int Code { get; set; }
        public  string Status { get; set; }
        public  string Description { get; set; }
        public  string Message { get; set; }
        public  object Result { get; set; }
    }

}
