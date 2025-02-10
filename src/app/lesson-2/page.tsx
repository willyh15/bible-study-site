import Link from "next/link";

export default function Lesson2() {
  return (
    <div className="snap-container">

      {/* Section 1: Introduction - Pray Without Ceasing */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-8 text-yellow-400">
            Lesson 2: The Power of Prayer
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            <strong>1 Thessalonians 5:16-18</strong> - &quot;Rejoice always, pray without ceasing, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.&quot;
            <br />
            <br />
            Prayer shouldnt just be an event it needs to be a lifestyle. It shapes our hearts, strengthens our faith, and keeps us aligned with God’s will.
          </p>
        </div>
      </section>

      {/* Section 2: Prayer Must Be Rooted in Faith */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Faith-Filled Prayer</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Hebrews 11:6</strong> - &quot;Without faith, it is impossible to please God, because anyone who comes to Him must believe that He exists and that He rewards those who earnestly seek Him.&quot;
            <br /><br />
            **Key Takeaways:**
            <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
              <li>Prayer isn’t just speaking; it’s trusting.</li>
              <li>We must believe in God’s presence when we pray.</li>
              <li>God responds to those who seek Him earnestly.</li>
            </ul>
          </p>
        </div>
      </section>

      {/* Section 3: Jesus' Prayer Life - A Model for Us */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Following Jesus’ Example</h2>
          <p className="text-gray-300 leading-loose">
            **Mark 1:35** - &quot;Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where He prayed.&quot;
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            **Luke 6:12** - &quot;One of those days, Jesus went out to a mountainside to pray, and spent the night praying to God.&quot;
          </p>
          <br />
          **Jesus prioritized prayer.** He sought solitude, prayed before making big decisions, and spent intimate time with the Father.
        </div>
      </section>

      {/* Section 4: Jesus' Greatest Prayer - John 17 */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Jesus’ High Priestly Prayer</h2>
          <p className="text-gray-300 leading-loose">
            <strong>John 17:20-21</strong> - &quot;I do not pray for these alone, but also for those who will believe in Me through their word; that they all may be one, as You, Father, are in Me, and I in You, that they also may be one in Us, that the world may believe that You sent Me.&quot;
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            Key Takeaways:
            <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
              <li>Jesus prayed **for us**, before we were even born.</li>
              <li>He prayed for **unity** and protection.</li>
              <li>Our prayers should seek **God’s glory**, not just our needs.</li>
            </ul>
          </p>
        </div>
      </section>

      {/* Section 5: Jesus' Most Intense Prayer - Gethsemane */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Jesus’ Prayer in Gethsemane</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Luke 22:42</strong> - &quot;Father, if You are willing, take this cup from Me; yet not My will, but Yours be done.&quot;
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            Jesus’ prayer in agony reminds us that prayer isn’t just about asking it’s about surrender. We should pray, but ultimately trust God’s will over our own.
          </p>
        </div>
      </section>

      {/* Section 6: How Jesus Taught Us to Pray */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-800 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">How to Pray - The Lord’s Prayer</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Matthew 6:9-13</strong> - Jesus said, &quot;This, then, is how you should pray...&quot;
          </p>
          <br />
          **Key Parts of the Lord’s Prayer:**
          <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
            <li>**Praise:** “Hallowed be Your name.”</li>
            <li>**Submission:** “Your will be done.”</li>
            <li>**Provision:** “Give us our daily bread.”</li>
            <li>**Forgiveness:** “Forgive us, as we forgive others.”</li>
            <li>**Protection:** “Deliver us from evil.”</li>
          </ul>
        </div>
      </section>

      {/* Section 7: Reflection Questions */}
      <section className="snap-item flex flex-col items-center justify-center bg-gray-900 text-white p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Reflection Questions</h2>
          <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
            <li>How can ee pray without ceasing in our daily lives?</li>
            <li>Which aspect of Jesus’ prayer life challenges you the most?</li>
            <li>Do you struggle with trusting God’s will in prayer?</li>
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