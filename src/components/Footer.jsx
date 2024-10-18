const Footer = () => {
  return (
    <div className="items-center grid grid-cols-1 justify-between gap-4 border-t border-gray-700 py-6 px-20 md:grid-cols-2 bg-gray-900">
        <p className="text-sm/6 text-slate-100 max-md:text-center">
            © 2024 Foody. All rights reserved.
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-100 md:justify-end">
            <a href="/">Privacy Policy</a>
            <div className="h-4 w-px bg-slate-200"></div>
            <a href="/">Terms & Conditions</a>
        </div>
    </div>
  )
}

export default Footer