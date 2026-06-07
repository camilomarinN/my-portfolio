export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      &copy; Camilo Marín Naranjo <span>{year}</span>, All rights reserved.
    </div>
  );
}
