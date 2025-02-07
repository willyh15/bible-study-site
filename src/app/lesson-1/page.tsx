// src/app/lesson-1/page.tsx

import Link from "next/link";
import RefiningAnimation from "@/components/RefiningAnimation";

export default function Lesson1() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-8 text-yellow-400">Lesson 1: Jesus's Prayer for Peter & The Refining Fire</h1>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
          <strong>Luke 22:31-32</strong> - "Simon, Simon, behold, Satan demanded to have you, that he might sift you like wheat, but I have prayed for you that your faith may not fail. And when you have turned again, strengthen your brothers."
          <br />
          This illustrates the power of intercessory prayer and faith refinement.
        </p>

        {/* Deep Dive into Jesus' Prayer for Peter */}
        <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">The Power of Prayer & Spiritual Refinement</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Jesus Knew Satan’s Plans</strong>
            <br /><strong>Luke 22:31-32</strong> - "Simon, Simon, behold, Satan demanded to have you, that he might sift you like wheat."
            <br /> Satan wanted to shake Peter’s faith, just as he does with us. God remains in control, even in spiritual battles.
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Parallel: Satan’s Request to Test Job</strong>
            <br /><strong>Job 1:6-12</strong> - "Now there was a day when the sons of God came to present themselves before the Lord, and Satan also came among them."
            <br /> Just as Satan sought permission to test Job, he sought to test Peter. God allowed these trials, not to destroy them, but to refine them.
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Jesus Interceded for Peter</strong>
            <br /><strong>Romans 8:34</strong> - "Who is to condemn? Christ Jesus is the one who died—more than that, who was raised—who is at the right hand of God, who indeed is interceding for us."
            <br /> Jesus didn't just warn Peter—He prayed for him. Do we intercede for others like Jesus did?
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Peter's Restoration</strong>
            <br /><strong>John 21:15-17</strong> - "When they had finished breakfast, Jesus said to Simon Peter, 'Simon, son of John, do you love me more than these?' He said to him, 'Yes, Lord; you know that I love you.' He said to him, 'Feed my lambs.'"
            <br /> After failure, Jesus restored Peter to lead the early church. Failure isn’t final—God uses trials to refine us.
          </p>
        </div>

        {/* Embedded Video (Locally Stored) */}
        <div className="flex justify-center my-8 w-full">
          <video className="rounded-lg shadow-lg" width="700" controls>
            <source src="/videos/gold-refining.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Refining Animation */}
        <RefiningAnimation />

        {/* Gold Refinement & Spiritual Growth */}
        <div className="mt-12 p-8 bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Refining Fire: A Biblical Perspective</h2>
          <p className="text-gray-300 leading-loose">
            <strong>1 Peter 1:6-7</strong> - "In this you rejoice, though now for a little while, if necessary, you have been grieved by various trials, so that the tested genuineness of your faith—more precious than gold that perishes though it is tested by fire—may be found to result in praise and glory and honor at the revelation of Jesus Christ."
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Job 23:10</strong> - "But he knows the way that I take; when he has tried me, I shall come out as gold."
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Malachi 3:3</strong> - "He will sit as a refiner and purifier of silver, and he will purify the sons of Levi and refine them like gold and silver, and they will bring offerings in righteousness to the Lord."
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Romans 8:29</strong> - "For those whom he foreknew he also predestined to be conformed to the image of his Son, in order that he might be the firstborn among many brothers."
          </p>
        </div>
      </div>

      {/* Discussion Section */}
      <div className="mt-12 p-8 bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Reflection Questions</h2>
        <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
          <li>How does Jesus's intercession shape our understanding of prayer?</li>
          <li>What impurities has God revealed in your faith through prayer?</li>
          <li>How can we make intercessory prayer a habit in our daily lives?</li>
          <li>Have you experienced a time where trials refined and strengthened your faith?</li>
          <li>How does the process of gold refinement reflect our spiritual journey?</li>
        </ul>
      </div>

      {/* Navigation Links */}
      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-400 hover:underline text-lg font-semibold">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
