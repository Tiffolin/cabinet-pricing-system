function App() {
  const products = [
    {
      sku: "CAB-001",
      name: "Base Cabinet 30”",
      category: "Cabinet",
      color: "Matte White",
      retail: "$540",
      contractor: "$395",
      wholesale: "$310",
    },
    {
      sku: "CAB-002",
      name: "Wall Cabinet 24”",
      category: "Cabinet",
      color: "Oak Wood",
      retail: "$480",
      contractor: "$350",
      wholesale: "$290",
    },
    {
      sku: "HDW-114",
      name: "Soft Close Hinges",
      category: "Hardware",
      color: "Black",
      retail: "$22",
      contractor: "$15",
      wholesale: "$10",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 p-4 md:p-6 text-neutral-800">
      <div className="mx-auto max-w-7xl space-y-6">

        {/* HEADER */}
        <div className="rounded-3xl bg-white p-5 md:p-6 shadow-sm">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                Cabinet Pricing System
              </h1>

              <p className="mt-1 text-sm text-neutral-500">
                Internal Pricing + Quote Management
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              <button className="h-11 rounded-2xl border border-neutral-300 px-4 text-sm font-medium hover:bg-neutral-50">
                Import Excel
              </button>

              <button className="h-11 rounded-2xl bg-black px-4 text-sm font-medium text-white hover:opacity-90">
                Generate Quote
              </button>

            </div>

          </div>

        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* FILTERS */}
            <div className="rounded-3xl bg-white p-5 shadow-sm">

              <div className="flex flex-col gap-4 md:flex-row">

                <input
                  className="flex-1 rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
                  placeholder="Search product / SKU"
                />

                <select className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none">
                  <option>Retail</option>
                  <option>Contractor</option>
                  <option>Wholesale</option>
                </select>

                <select className="rounded-2xl border border-neutral-300 px-4 py-3 outline-none">
                  <option>All Categories</option>
                  <option>Cabinets</option>
                  <option>Hardware</option>
                  <option>Services</option>
                </select>

              </div>

            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden md:block overflow-hidden rounded-3xl bg-white shadow-sm">

              <div className="border-b border-neutral-200 px-6 py-4">
                <h2 className="text-lg font-semibold">
                  Products
                </h2>
              </div>

              <div className="overflow-x-auto">

                <table className="min-w-full text-sm">

                  <thead className="bg-neutral-50 text-left text-neutral-500">

                    <tr>
                      <th className="px-6 py-4 font-medium">SKU</th>
                      <th className="px-6 py-4 font-medium">Product</th>
                      <th className="px-6 py-4 font-medium">Category</th>
                      <th className="px-6 py-4 font-medium">Color</th>
                      <th className="px-6 py-4 font-medium">Price</th>
                      <th className="px-6 py-4 font-medium"></th>
                    </tr>

                  </thead>

                  <tbody>

                    {products.map((product, index) => (

                      <tr
                        key={index}
                        className="border-t border-neutral-100"
                      >

                        <td className="px-6 py-4 font-medium">
                          {product.sku}
                        </td>

                        <td className="px-6 py-4">
                          {product.name}
                        </td>

                        <td className="px-6 py-4">
                          {product.category}
                        </td>

                        <td className="px-6 py-4">
                          {product.color}
                        </td>

                        <td className="px-6 py-4 font-semibold">
                          {product.retail}
                        </td>

                        <td className="px-6 py-4 text-right">

                          <button className="rounded-xl bg-black px-3 py-2 text-xs font-medium text-white hover:opacity-90">
                            Add
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* MOBILE PRODUCT CARDS */}
            <div className="md:hidden rounded-3xl bg-white shadow-sm overflow-hidden">

              {/* Header */}
              <div className="border-b border-neutral-200 px-5 py-4">

                <h2 className="text-lg font-semibold">
                  Products
                </h2>

              </div>

              {/* Product Cards */}
              <div className="space-y-4 p-4">

                {products.map((product, index) => (

                  <div
                    key={index}
                    className="rounded-3xl border border-neutral-200 p-5"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h3 className="text-base font-semibold">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-sm text-neutral-500">
                          SKU: {product.sku}
                        </p>

                      </div>

                      <p className="whitespace-nowrap text-lg font-bold">
                        {product.retail}
                      </p>

                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

                      <div className="rounded-2xl bg-neutral-100 p-3">

                        <p className="text-neutral-500">
                          Category
                        </p>

                        <p className="mt-1 font-medium">
                          {product.category}
                        </p>

                      </div>

                      <div className="rounded-2xl bg-neutral-100 p-3">

                        <p className="text-neutral-500">
                          Color
                        </p>

                        <p className="mt-1 font-medium">
                          {product.color}
                        </p>

                      </div>

                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">

                      <div className="rounded-2xl border border-neutral-200 p-3">

                        <p className="text-neutral-500">
                          Retail
                        </p>

                        <p className="mt-1 font-semibold">
                          {product.retail}
                        </p>

                      </div>

                      <div className="rounded-2xl border border-neutral-200 p-3">

                        <p className="text-neutral-500">
                          Contractor
                        </p>

                        <p className="mt-1 font-semibold">
                          {product.contractor}
                        </p>

                      </div>

                      <div className="rounded-2xl border border-neutral-200 p-3">

                        <p className="text-neutral-500">
                          Wholesale
                        </p>

                        <p className="mt-1 font-semibold">
                          {product.wholesale}
                        </p>

                      </div>

                    </div>

                    <button className="mt-5 h-11 w-full rounded-2xl bg-black text-sm font-medium text-white hover:opacity-90">
                      Add to Quote
                    </button>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* QUOTE BUILDER */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <h2 className="text-lg font-semibold">
                    Quote Builder
                  </h2>

                  <p className="text-sm text-neutral-500">
                    Draft customer quote
                  </p>

                </div>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium">
                  Retail Tier
                </span>

              </div>

              <div className="space-y-4">

                <div className="rounded-2xl border border-neutral-200 p-4">

                  <div className="flex items-start justify-between">

                    <div>

                      <h3 className="font-medium">
                        Base Cabinet 30”
                      </h3>

                      <p className="text-sm text-neutral-500">
                        Matte White × 2
                      </p>

                    </div>

                    <p className="font-semibold">
                      $1080
                    </p>

                  </div>

                </div>

                <div className="rounded-2xl border border-neutral-200 p-4">

                  <div className="flex items-start justify-between">

                    <div>

                      <h3 className="font-medium">
                        Installation Service
                      </h3>

                      <p className="text-sm text-neutral-500">
                        Standard install
                      </p>

                    </div>

                    <p className="font-semibold">
                      $850
                    </p>

                  </div>

                </div>

              </div>

              <div className="mt-6 space-y-3 border-t border-neutral-200 pt-5 text-sm">

                <div className="flex justify-between">

                  <span className="text-neutral-500">
                    Subtotal
                  </span>

                  <span>
                    $1930
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-neutral-500">
                    GST
                  </span>

                  <span>
                    $96.50
                  </span>

                </div>

                <div className="flex justify-between text-lg font-semibold">

                  <span>Total</span>
                  <span>$2026.50</span>

                </div>

              </div>

              <button className="mt-6 h-11 w-full rounded-2xl bg-black px-4 font-medium text-white hover:opacity-90">
                Export Quote PDF
              </button>

            </div>

            {/* FUTURE FEATURES */}
            <div className="rounded-3xl bg-white p-6 shadow-sm">

              <h2 className="text-lg font-semibold">
                Future Features
              </h2>

              <div className="mt-4 flex flex-wrap gap-2 text-sm">

                {[
                  "Excel Import",
                  "Customer Database",
                  "Inventory",
                  "Login System",
                  "Supplier Sync",
                  "Mobile Optimization",
                ].map((feature) => (

                  <span
                    key={feature}
                    className="rounded-full border border-neutral-300 px-3 py-1"
                  >
                    {feature}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;