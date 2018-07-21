using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace evalGramJam.Models
{
    public class FormsDataBase
    {
        public string ConnectionString { get; set; }

        public FormsDataBase(string connectionString) {
            this.ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection() {
            return new MySqlConnection(ConnectionString);
        }

        public List<User> GetAllUsers() {
            List<User> list = new List<User>();

            using (MySqlConnection conn = GetConnection()) {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM User", conn);
                using (MySqlDataReader reader = cmd.ExecuteReader()) {
                    while (reader.Read()) {
                        list.Add(new User()
                        {
                            Name = reader.GetString("name"),
                            Title = reader.GetString("title"),
                            SAP = reader.GetInt16("sap"),
                            Division = reader.GetString("division")
                        });
                    }
                }
            }
            return list;
        }
    }
}
