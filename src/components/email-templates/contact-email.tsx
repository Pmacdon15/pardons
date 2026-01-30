interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>New message from: {name}</h1>
      <p>Email: {email}</p>
      <p>Subject: {subject}</p>
      <p>Message: {message}</p>
    </div>
  );
}
