/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";

export default function Lesson2() {
  return (
    <div className="snap-container">

      {/* Section 1: The Frequency and Importance of Prayer */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            How Often is "Prayer" Mentioned in the Bible?
          </h2>

          <Image
            src="/images/pray-continually.webp"
            alt="Pray Continually - 1 Thessalonians 5:17"
            width={700}
            height={400}
            priority
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-lg text-gray-300 leading-loose">
            In the King James Version (KJV):<br />
            - "Prayer" and its variations appear 547 times.<br />
            - "Faith" appears 336 times.<br />
            - "Love" appears 310 times.<br />
            - "Grace" appears 170 times.
          </p>

          {/* Discussion Question */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl text-yellow-300 font-semibold">Discussion Question:</h3>
            <p className="text-gray-300">If God emphasizes prayer more than faith and love in Scripture, how seriously should we take our own prayer life?</p>
          </div>
        </div>
      </section>

      {/* Section 2: Why is Prayer Necessary? */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            Why is Prayer Necessary?
          </h2>

          <Image
            src="/images/prayer-hands.webp"
            alt="Hands Lifted in Prayer"
            width={700}
            height={400}
            loading="lazy"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            - A lifestyle of continual communion with God.<br />
            - Is prayer just scheduled moments, or a constant connection?
          </p>

          {/* Discussion Question */}
          <div className="mt-6 p-4 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl text-yellow-300 font-semibold">Discussion Question:</h3>
            <p className="text-gray-300">What does "pray without ceasing" (1 Thessalonians 5:16-18) mean in our daily lives?</p>
          </div>
        </div>
      </section>

      {/* Section 3: Boldly Approaching the Throne of Grace */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            Boldly Approaching the Throne of Grace
          </h2>

          <Image
            src="/images/throne-of-grace.webp"
            alt="Throne of Grace - Hebrews 4:16"
            width={700}
            height={400}
            loading="lazy"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            - "Come boldly" – Through Christ, we have full access to God’s presence.<br />
            - "Throne of grace" – God's throne is one of mercy and help, not condemnation.<br />
            - "Find grace to help" – He provides strength and forgiveness in our time of need.
          </p>

          {/* Discussion Question */}
          <div className="mt-6 p-4 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl text-yellow-300 font-semibold">Discussion Question:</h3>
            <p className="text-gray-300">How does knowing we can approach God with "boldness" (Hebrews 4:16) change the way we pray?</p>
          </div>
        </div>
      </section>

      {/* Section 5: The Power of Faith in Prayer */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            The Power of Faith in Prayer
          </h2>

          <Image
            src="/images/prayer-faith.webp"
            alt="Faith in Prayer - Mark 11:24"
            width={700}
            height={400}
            loading="lazy"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            - "What things soever ye desire" – Our prayers should align with God’s will and His purposes.<br />
            - "Believe that ye receive them" – Prayer requires faith and trust in God’s ability to provide.<br />
            - "And ye shall have them" – God answers prayers according to His perfect will and timing.
          </p>

          {/* Discussion Question */}
          <div className="mt-6 p-4 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl text-yellow-300 font-semibold">Discussion Question:</h3>
            <p className="text-gray-300">How can we balance faith-filled prayer with submission to God’s will (Mark 11:24 vs. Mark 14:36)?</p>
          </div>
        </div>
      </section>

      {/* Section 7: Persistent Prayer */}
      <section className="snap-item min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-6 underline">
            The Power of Persistent Prayer
          </h2>

          <Image
            src="/images/persistent-widow.webp"
            alt="The Persistent Widow in Prayer"
            width={700}
            height={400}
            loading="lazy"
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, 700px"
            className="w-full max-w-lg object-cover rounded-lg shadow-lg my-6"
          />

          <p className="text-gray-300 leading-loose">
            - Jesus taught this parable to show the power of persistent prayer.<br />
            - If an unjust judge answered the widow because of persistence, how much more will our loving Father respond?
          </p>

          {/* Discussion Question */}
          <div className="mt-6 p-4 bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-xl text-yellow-300 font-semibold">Discussion Question:</h3>
            <p className="text-gray-300">Why do we think Jesus emphasized persistence in prayer (Luke 18:1-8)?</p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-400 hover:underline text-lg font-semibold">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}