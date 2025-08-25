// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// ✅ CORRECT for App Router
export async function GET() {
  return Response.json({ name: 'John Doe' });
}

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
