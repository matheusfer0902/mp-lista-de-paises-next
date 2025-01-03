async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();

  console.log(countries)
  return (
    <section className="flex w-full container">
      teste
    </section>
  );
}
