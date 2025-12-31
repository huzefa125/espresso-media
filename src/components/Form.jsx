import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnjnapry");

  return (
    <section className="w-full bg-black flex justify-center px-6 py-32">

      {/* CARD */}
      <div className="
        w-full max-w-5xl
        rounded-[40px]
        bg-gradient-to-b from-[#2a2a2a] via-[#1c1c1c] to-black
        px-16 py-20
        shadow-[0_40px_120px_rgba(0,0,0,0.8)]
        border border-white/5
      "> 

        {/* TOP TEXT */}
        <p className="text-white text-lg mb-6">
          Ready to take the next step in your business?
        </p>

        <h2 className="font-serif text-[48px] text-[#C08860] mb-16">
          Let's Talk
        </h2>

        {/* SUCCESS MESSAGE */}
        {state.succeeded ? (
          <div className="text-center py-16">
            <div className="text-[#C08860] text-3xl mb-4">✓</div>
            <p className="text-white text-2xl font-serif mb-2">Thank you for reaching out!</p>
            <p className="text-gray-400">We'll get back to you soon.</p>
          </div>
        ) : (
          /* FORM */
          <form onSubmit={handleSubmit} className="space-y-10">

            <Input
              label="Name"
              name="name"
              type="text"
              required
              errors={state.errors}
            />

            <Input
              label="Email id"
              name="email"
              type="email"
              required
              errors={state.errors}
            />

            <Input
              label="Mobile no."
              name="mobile"
              type="tel"
              required
              errors={state.errors}
            />

            <Input
              label="Website/Social media link"
              name="website"
              type="url"
              errors={state.errors}
            />

            <Input
              label="Services"
              name="services"
              type="text"
              errors={state.errors}
            />

            <Input
              label="Objective"
              name="objective"
              type="text"
              errors={state.errors}
            />

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={state.submitting}
              className="
                w-full mt-12 py-4 rounded-full
                bg-gradient-to-b from-[#2b2b2b] to-black
                text-gray-300 tracking-widest
                border border-white/10
                hover:text-white transition
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {state.submitting ? 'SUBMITTING...' : 'SUBMIT'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ================= INPUT COMPONENT ================= */

function Input({ label, name, type = "text", required = false, errors }) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-gray-400 mb-2">
        {label} {required && <span className="text-[#C08860]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="
          w-full bg-transparent
          border-b border-[#C08860]/60
          text-white py-2
          outline-none
          focus:border-[#C08860]
          transition
        "
      />
      <ValidationError
        prefix={label}
        field={name}
        errors={errors}
        className="text-red-400 text-sm mt-1"
      />
    </div>
  );
}