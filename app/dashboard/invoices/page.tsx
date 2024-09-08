export default async function Invoices() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 2000);
  });
  return <p>Invoices Page</p>;
}
