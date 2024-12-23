export default function Page() {
  async function submitForm(formData) {
    "use server";
    const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("Formfields", formFields);
    console.log("TODO: Send these form field value to a backend");
    return formFields;
  }

  return (
    <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-black">
      <h1 className="text-2x1 font-bold text-center mb-6">Contact page</h1>
      <form className="space-y-4" action={submitForm}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-grey-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-grey-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-grey-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="border border-grey-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button type="submit" className="text-white bg-blue-600 rounded-md p-3">
          Send Message
        </button>
      </form>
    </main>
  );
}
