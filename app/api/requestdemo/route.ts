export async function POST(request: Request) {
  const formData = await request.formData();

  const first_name = formData.get('first_name');
  const last_name = formData.get('last_name');
  const mobile = formData.get('mobile');
  const email = formData.get('email');
  const privacy = formData.get('privacy');

  console.log(
    'formData',
    first_name,
    last_name,
    mobile,
    email,
    privacy,
    process.env.token,
  );

  const res = await fetch('https://api.exagonplus.com/v1/landing', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.token}`,
    },
    body: JSON.stringify({
      data: { first_name, last_name, mobile, email, privacy },
    }),
  });

  const data = await res.json();

  console.log('data', data);
  return Response.json(data);
}
