export default function submitBtn({ text, disabled }) {
    return (
      <button
        type="submit"
        className="h-12 px-6 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all"
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
  