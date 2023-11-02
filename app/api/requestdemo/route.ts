export async function POST(request: Request) {
  const formData = await request.formData();

  const first_name = formData.get('first_name');
  const last_name = formData.get('last_name');
  const mobile = formData.get('mobile');
  const email = formData.get('email');
  const privacy = formData.get('privacy');

  const res = await fetch(process.env.form_url, {
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
