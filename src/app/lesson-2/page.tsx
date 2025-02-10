// src/app/lesson-2/page.tsx
import Link from "next/link";
import FaithBridge from "@/components/FaithBridge";

export default function Lesson2() {
  return (
    <div className="snap-container">
      
      {/* Section 1: The Frequency and Importance of Prayer */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Lesson 2: The Power and Necessity of Prayer</h1>
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4 underline">How Often is &quot;Prayer&quot; Mentioned in the Bible?</h2>
          <p className="text-lg text-gray-300 leading-loose mt-4">
            In the King James Version (KJV):<br />
            - &quot;Prayer&quot; and its variations appear 547 times.<br />
            - &quot;Faith&quot; appears 336 times.<br />
            - &quot;Love&quot; appears 310 times.<br />
            - &quot;Grace&quot; appears 170 times.
          </p>

          <p className="text-lg text-gray-300 leading-loose mt-4">
            <strong>Why Does This Matter?</strong><br />
            - The frequency of a word in Scripture often reflects its importance.<br />
            - If God emphasizes prayer more than faith or love, how seriously should we take it?
          </p>
        </div>
      </section>

      {/* Section 2: Scriptural Foundation for Prayer */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4 underline">Why is Prayer Necessary?</h2>
          <p className="text-gray-300 leading-loose">
            <strong>1 Thessalonians 5:16-18</strong> - &quot;Pray without ceasing.&quot;<br />
            - A lifestyle of continual communion with God.<br />
            - Is prayer just scheduled moments, or a constant connection?
          </p>

          <p className="text-gray-300 leading-loose mt-4">
            <strong>Hebrews 11:6</strong> - Prayer is an act of faith.<br />
            - We approach God believing He hears us.<br />
            - Faith-filled prayer pleases God.
           </p>
        {/* Faith as a Bridge Visualization */}
          <FaithBridge />
        </div>
      </section>

      {/* Section 3: Jesus and Prayer */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4 underline">Jesus&rsquo; Prayer Life</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Mark 1:35</strong> - Jesus prayed early in the morning.<br />
            - Even in busyness, He prioritized prayer.<br />
            - How do we make time for prayer in a hectic life?
          </p>
        </div>
      </section>

      {/* Section 4: Jesus' Teachings on Prayer */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4 underline">Jesus&apos; Teachings on Prayer</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Matthew 6:5-8</strong> - Pray sincerely, not for show.<br />
            - Do we pray from the heart or for appearance?
          </p>
        </div>
      </section>

      {/* Section 5: Deeper Symbolic Connections */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4 underline">Deeper Symbolism of Prayer</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Prayer as Incense</strong> (Psalm 141:2, Revelation 5:8)<br />
            - Our prayers rise to God as a fragrant offering.<br />
            - Are we filling heaven with pleasing prayers?
          </p>
        </div>
      </section>

      {/* Section 6: Final Reflection Questions */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4 underline">Reflection Questions</h2>
          <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
            <li>Are we prioritizing prayer as Jesus did?</li>
            <li>Are we praying sincerely, persistently, and in faith?</li>
            <li>Do we view prayer as a privilege, not just a duty?</li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-400 hover:underline text-lg font-semibold">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}