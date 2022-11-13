export default function handler(req:any, res:any) {
    const { id } = req.query;
    console.log('TESTTSTSWES')
    if (req.method === "DELETE") {
      res.send(`Category: ${id}`);
    }
  }