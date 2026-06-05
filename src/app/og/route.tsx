import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            position: 'relative',
          }}
        >
          {/* Gradient Background */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, #000000, #1a1a1a)',
              opacity: 0.9,
            }}
          />
          
          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              zIndex: 10,
              padding: '20px',
            }}
          >
            <h1
              style={{
                fontSize: 64,
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '20px',
                fontFamily: 'Inter',
              }}
            >
              Workloom Studio
            </h1>
            <p
              style={{
                fontSize: 28,
                color: '#ffffff',
                opacity: 0.9,
                marginTop: 0,
                fontFamily: 'Inter',
              }}
            >
              We Turn Scattered Work Into Clean Systems.
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 