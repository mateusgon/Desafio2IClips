using Desafio2IClips.Classes;
using Desafio2IClips.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace Desafio2IClips.Controllers
{
    public class PessoasController : Controller
    {
        public ActionResult GetPessoas(string situacao, int tipoOrdenacao)
        {
            PessoaDAO pessoaDAO = new PessoaDAO();
            var pessoas = pessoaDAO.GetPessoas(situacao, tipoOrdenacao);
            return Json(pessoas, JsonRequestBehavior.AllowGet);
        }

        // GET: Pessoas
        public ActionResult Index()
        {
            return View();
        }

    }
}