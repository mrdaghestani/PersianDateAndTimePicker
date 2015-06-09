using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersianDateAndTimePicker
{
    public class TestClass
    {
        public DateTime? Value { get; set; }
        public Member Member { get; set; }
    }
    public class Member
    {
        public DateTime AlarmDate { get; set; }
    }
}