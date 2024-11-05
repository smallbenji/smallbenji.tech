import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { slug: string[] } }) {
  const { slug } = params;

    var url = "https://minio.smallbenji.tech/smallbenji.tech";
    
    slug.forEach(path => {
        url += "/" + path 
    });

    const data = await fetch(url, {
        cache: "no-cache"
    })

    const imageBuffer = await data.arrayBuffer();

    return new NextResponse(imageBuffer, {
        headers: {
            "Content-Type": data.headers.get("Content-Type") || "image/jpeg",
            "Cache-Control": "public, max-age=31536000, immutable"
        },
    })

  return data;
}