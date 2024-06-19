const Ticket= require("../models/ticket")
const TicketCtrl={};
TicketCtrl.createTicket = async (req,res)=>{
    var ticket= new Ticket(req.body);
    try{
        await ticket.save()
        res.json({
            status:"1",
            msg:"ticket guardado"

        })
    }catch(error){
        res.status(400).json({
            status:"0",
            msg:"error procesando informacion"
        })
    }
};



TicketCtrl.getTickets= async (req,res) => {
    var ticket= await Ticket.find().populate("espectador").populate("tipo");//el populate me sirve para mostrar los datos de espectador en el ticket
    res.json(ticket)
}


TicketCtrl.deleteTicket= async (req,res)=>{
    try{
        await Ticket.deleteOne({id: req.query.params})
        res.json({
            status:"1",
            msg:"Ticket Eliminado"
        })
    }
    catch(error){
        res.status(400).json({
            status:"0",
            msg:"error procesando la informacion"
        })
    }
}


TicketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
      await Ticket.updateOne({_id: req.body._id }, vticket);
      res.json({
        status: "1",
        msg: "ticket updated",
      });
    } catch (error) {
      res.status(400).json({
        status: "0",
        msg: "Error procesando la operacion",
      });
    }
  };
  TicketCtrl.getTicketsTipo= async (req,res) => {
    const {tipo} = req.query
    var ticket= await Ticket.find({categoriaEspectador:tipo}).populate("espectador").populate("tipo");
    res.json(ticket)
};

TicketCtrl.ByTicket= async (req,res) => {
    var ticket= await Ticket.findById(req.params.id).populate("espectador").populate("tipo");//el populate me sirve para mostrar los datos de espectador en el ticket
    res.json(ticket)
}



module.exports = TicketCtrl