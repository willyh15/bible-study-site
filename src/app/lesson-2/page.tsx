// src/app/lesson-2/page.tsx
import Link from "next/link";

export default function Lesson2() {
  return (
    <div className="snap-container">
      
      {/* Section 1: The Frequency and Importance of Prayer */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-8 text-yellow-400">
            Lesson 2: The Power and Necessity of Prayer
          </h1>

          {/* Engagement Question */}
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">How Often is "Prayer" Mentioned in the Bible?</h2>
          <p className="text-lg text-gray-300 leading-loose mt-4">
            In the King James Version (KJV):  
            - "Prayer" and its variations appear 547 times.  
            - "Faith" appears 336 times.  
            - "Love" appears 310 times.  
            - "Grace" appears 170 times.
          </p>

          <p className="text-lg text-gray-300 leading-loose mt-4">
            Why Does This Matter?  
            - The frequency of a word in Scripture often reflects its importance.  
            - If God emphasizes prayer more than faith or love, how seriously should we take it?
          </p>
        </div>
      </section>

      {/* Section 2: Scriptural Foundation for Prayer */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Why is Prayer Necessary?</h2>
          <p className="text-gray-300 leading-loose">
            <strong>1 Thessalonians 5:16-18</strong> - "Pray without ceasing."  
            - A lifestyle of continual communion with God.  
            - Is prayer just scheduled moments, or a constant connection?
          </p>

          <p className="text-gray-300 leading-loose mt-4">
            <strong>Hebrews 11:6</strong> - Prayer is an act of faith.  
            - We approach God believing He hears us.  
            - Faith-filled prayer pleases God.
          </p>

          <p className="text-gray-300 leading-loose mt-4">
            <strong>Romans 12:12</strong> - "Be constant in prayer."  
            - Prayer sustains us in difficult times.  
            - How do we remain faithful in prayer during struggles?
          </p>
        </div>
      </section>

      {/* Section 3: Jesus and Prayer */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Jesus’ Prayer Life</h2>
          
          <p className="text-gray-300 leading-loose">
            Mark 1:35 - Jesus prayed early in the morning.  
            - Even in busyness, He prioritized prayer.  
            - How do we make time for prayer in a hectic life?
          </p>

          <p className="text-gray-300 leading-loose mt-4">
            Luke 6:12 - Jesus prayed all night before choosing His apostles.  
            - Big decisions require deep prayer.  
            - How do we involve God in major life choices?
          </p>

          <p className="text-gray-300 leading-loose mt-4">
            John 17 - Jesus’ High Priestly Prayer.  
            - He prayed for Himself, His disciples, and future believers.  
            - Jesus prayed for us before we were even born!
          </p>
        </div>
      </section>

      {/* Section 4: Jesus' Teachings on Prayer */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Jesus' Teachings on Prayer</h2>

          <p className="text-gray-300 leading-loose">
            Matthew 6:5-8 - Pray sincerely, not for show.  
            - Do we pray from the heart or for appearance?
          </p>

          <p className="text-gray-300 leading-loose mt-4">
            Luke 18:1-8 - The Persistent Widow.  
            - If even an unjust judge answers persistence,  
              how much more will God respond to our prayers?
          </p>

          <p className="text-gray-300 leading-loose mt-4">
            Luke 11:9-13 - Ask, Seek, Knock.  
            - Prayer isn’t about repetition but **persistence in faith**.
          </p>
        </div>
      </section>

      {/* Section 5: Deeper Symbolic Connections */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Deeper Symbolism of Prayer</h2>

          <p className="text-gray-300 leading-loose">
            Prayer as Incense (Psalm 141:2, Revelation 5:8)  
            - Our prayers rise to God as a fragrant offering.  
            - Are we filling heaven with pleasing prayers?
          </p>

          <p className="text-gray-300 leading-loose mt-4">
            The Temple Veil and Prayer (Matthew 27:51, Hebrews 4:16)  
            - Jesus’ death tore the veil, giving us direct access to God.  
            - Do we take for granted the privilege of direct access to God?
          </p>
        </div>
      </section>

      {/* Section 6: Final Reflection Questions */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Reflection Questions</h2>
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