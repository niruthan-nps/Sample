export default function Newsletter() {
  return (
    <section className="bg-gray-100 px-16 py-20 text-center">
      <h2 className="text-2xl font-bold text-gray-800">
        Sign Up To Our Newsletter
      </h2>
      <p className="text-gray-600 mt-2">
        Be the first to hear about the latest offers.
      </p>
      <form className="mt-6 flex justify-center">
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 rounded-l-lg border border-gray-300 w-80"
        />
        <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
          Subscribe
        </button>
      </form>
    </section>
  );
}
