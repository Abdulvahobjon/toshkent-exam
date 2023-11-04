import React from 'react'

export default function Footer() {
  return (
    <footer className="py-4 border border-t-2 border-t-[#ddd]">
        <div className="max-w-[1260px] mx-auto px-5 flex gap-3 items-center">
          <p className="text-sm leading-5 text-[#222]">© 2023 Airbnb, Inc.</p>
          <ul className="flex gap-1.5 items-center">
            <li className="text-sm leading-5 text-[#222] flex gap-1.5 before:rounded-full items-center  before:contents-[''] before:block before:w-[2px] before:mt-1 justify-center before:h-[2px] before:bg-[#222]">
              Terms
            </li>
            <li className="text-sm leading-5 text-[#222] flex gap-1.5 before:rounded-full items-center  before:contents-[''] before:block before:w-[2px] before:mt-1 justify-center before:h-[2px] before:bg-[#222]">
              Sitemap
            </li>
            <li className="text-sm leading-5 text-[#222] flex gap-1.5 before:rounded-full items-center  before:contents-[''] before:block before:w-[2px] before:mt-1 justify-center before:h-[2px] before:bg-[#222]">
              Privacy
            </li>
            <li className="text-sm leading-5 text-[#222] flex gap-1.5 before:rounded-full items-center  before:contents-['']  before:block  before:w-[2px] before:mt-1 justify-center  before:h[2px]1  after:bg-[#222]">
              Your Privacy Choices
            </li>
          </ul>
          <span className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="13"
              viewBox="0 0 27 13"
              fill="none"
            >
              <path
                d="M20.8125 1.10938H6.8125C3.77493 1.10938 1.3125 3.57181 1.3125 6.60938C1.3125 9.64694 3.77493 12.1094 6.8125 12.1094H20.8125C23.8501 12.1094 26.3125 9.64694 26.3125 6.60938C26.3125 3.57181 23.8501 1.10938 20.8125 1.10938Z"
                fill="white"
              />
              <path
                d="M14.8125 1.60938H21.8125C23.1386 1.60938 24.4104 2.13616 25.348 3.07384C26.2857 4.01152 26.8125 5.28329 26.8125 6.60938C26.8125 7.93546 26.2857 9.20723 25.348 10.1449C24.4104 11.0826 23.1386 11.6094 21.8125 11.6094H11.8125L14.8125 1.60938Z"
                fill="#0066FF"
              />
              <path
                d="M5.3125 7.10938L7.0865 8.88338C7.11342 8.90998 7.14603 8.93013 7.18187 8.9423C7.21771 8.95446 7.25585 8.95833 7.2934 8.95362C7.33096 8.9489 7.36695 8.93571 7.39867 8.91506C7.43039 8.8944 7.457 8.86681 7.4765 8.83438L10.3125 4.10938"
                stroke="#0066FF"
                stroke-linecap="round"
              />
              <path
                d="M17.3125 4.10938L19.8125 6.60938M19.8125 6.60938L22.3125 9.10938M19.8125 6.60938L22.3125 4.10938M19.8125 6.60938L17.3125 9.10938"
                stroke="white"
                stroke-linecap="round"
              />
              <path
                d="M20.8125 1.10938H6.8125C3.77493 1.10938 1.3125 3.57181 1.3125 6.60938C1.3125 9.64694 3.77493 12.1094 6.8125 12.1094H20.8125C23.8501 12.1094 26.3125 9.64694 26.3125 6.60938C26.3125 3.57181 23.8501 1.10938 20.8125 1.10938Z"
                stroke="#0066FF"
              />
            </svg>
          </span>

          <ul className="ml-auto flex items-center gap-6">
            <li className="flex items-center gap-2 text-[#222] font-bold text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M8.51762 1.04688C10.5756 1.0527 12.5472 1.87472 13.9997 3.33254C15.4523 4.79037 16.2672 6.76491 16.2656 8.82288C16.2587 10.834 15.4703 12.7638 14.0668 14.2043C12.6634 15.6449 10.7549 16.4835 8.74463 16.5429L8.49862 16.5469C6.48707 16.5426 4.55598 15.7564 3.11349 14.3544C1.67099 12.9524 0.830135 11.0445 0.768625 9.03388L0.765625 8.78888C0.767746 6.73449 1.58547 4.765 3.03908 3.31326C4.49269 1.86153 6.46324 1.04634 8.51762 1.04688ZM10.4666 9.54688H6.56362C6.71863 12.4439 7.73962 14.8899 8.44963 15.0399L8.51762 15.0469C9.19763 15.0449 10.2376 12.6819 10.4496 9.81688L10.4666 9.54688ZM14.7216 9.54688H11.9696C11.8786 11.5069 11.4396 13.3299 10.7816 14.6229C11.7965 14.2275 12.6906 13.574 13.3755 12.727C14.0604 11.8801 14.5123 10.8691 14.6866 9.79387L14.7216 9.54688ZM5.06063 9.54688H2.31062C2.44665 10.6693 2.88427 11.7339 3.57696 12.6275C4.26966 13.5211 5.19155 14.2103 6.24463 14.6219C5.62963 13.4139 5.20862 11.7469 5.08262 9.93587L5.06063 9.54587V9.54688ZM6.24862 2.97088L6.13363 3.01688C5.10742 3.44071 4.21247 4.12997 3.54064 5.01392C2.8688 5.89787 2.44427 6.94466 2.31062 8.04688H5.06063C5.14563 6.21688 5.53163 4.50688 6.11963 3.23688L6.24862 2.97088ZM8.51062 2.54688C7.80862 2.54888 6.72662 5.05888 6.56362 8.04688H10.4676C10.3116 5.14388 9.28963 2.70388 8.57563 2.55288L8.51062 2.54588V2.54688ZM10.7906 2.97888L10.8136 3.02888C11.4566 4.31688 11.8826 6.11288 11.9706 8.04688H14.7186C14.58 6.92688 14.1419 5.865 13.4504 4.97309C12.7589 4.08118 11.8407 3.39225 10.7906 2.97888Z"
                  fill="#222222"
                />
              </svg>{" "}
              <span>English (US)</span>
            </li>
            <li className="flex items-center gap-2 text-[#222] font-bold text-sm">
              $<span>USD</span>
            </li>
            <li className="flex items-center gap-3 text-[#222] font-bold text-sm">
              <span>Support & resources</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M2.95312 10.7969L8.59957 5.15041C8.79483 4.95515 9.11142 4.95515 9.30668 5.15041L14.9531 10.7969"
                  stroke="#222222"
                  stroke-width="2"
                />
              </svg>
            </li>
          </ul>
        </div>
      </footer>
  )
}
