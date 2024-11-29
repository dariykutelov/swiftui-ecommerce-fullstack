import { Request, Response } from "express";

async function httpGetProducts(req: Request, res: Response) {
  try {
    const { page, limit, ...query } = req.query;
    const currentPage = parseInt(page as string);
    const limitPage = parseInt(limit as string);
    // const data: { products: Product[]; pagination: Pagination } =
    //   await getProducts({ page: currentPage, limit: limitPage, query });
    return res.status(200).json({ message: "Hello World" });
  } catch (error) {
    console.log(error);
    let errorMessage = error instanceof Error ? error.message : String(error);
    return res.status(400).json({ error: errorMessage });
  }
}

export { httpGetProducts };
