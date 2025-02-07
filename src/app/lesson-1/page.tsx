// src/app/lesson-1/page.tsx

import Link from "next/link";
import RefiningAnimation from "@/components/RefiningAnimation";

export default function Lesson1() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-8 text-yellow-400">Lesson 1: Jesus&apos;s Prayer for Peter & The Refining Fire</h1>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
          <strong>Luke 22:31-32</strong> - "And the Lord said, Simon, Simon, behold, Satan hath desired to have you, that he may sift you as wheat:
          But I have prayed for thee, that thy faith fail not: and when thou art converted, strengthen thy brethren."
          <br />
          This illustrates the power of intercessory prayer and faith refinement.
        </p>

        {/* Deep Dive into Jesus' Prayer for Peter */}
        <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full">
          <h2 className="text-3xl font-semibold text-yellow-300 mb-4">The Power of Prayer & Spiritual Refinement</h2>
          <p className="text-gray-300 leading-loose">
            <strong>Jesus Knew Satan’s Plans</strong> 
            <br /><strong>Job 1:6-12</strong> - "Now there was a day when the sons of God came to present themselves before the Lord, and Satan came also among them."
            <br /> Satan wanted to shake Peter’s faith, just as he does with us. God remains in control, even in spiritual battles.
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Jesus Interceded for Peter</strong> 
            <br /><strong>Romans 8:34</strong> - "Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us."
            <br /> Jesus didn&apos;t just warn Peter—He prayed for him. Do we intercede for others like Jesus did?
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Peter&apos;s Restoration</strong> 
            <br /><strong>John 21:15-17</strong> - "So when they had dined, Jesus saith to Simon Peter, Simon, son of Jonas, lovest thou me more than these? He saith unto him, Yea, Lord; thou knowest that I love thee. He saith unto him, Feed my lambs."
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
            <strong>1 Peter 1:6-7</strong> - "Wherein ye greatly rejoice, though now for a season, if need be, ye are in heaviness through manifold temptations:
            That the trial of your faith, being much more precious than of gold that perisheth, though it be tried with fire, might be found unto praise and honour and glory at the appearing of Jesus Christ."
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Job 23:10</strong> - "But he knoweth the way that I take: when he hath tried me, I shall come forth as gold."
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Malachi 3:3</strong> - "And he shall sit as a refiner and purifier of silver: and he shall purify the sons of Levi, and purge them as gold and silver, that they may offer unto the Lord an offering in righteousness."
          </p>
          <p className="text-gray-300 leading-loose mt-4">
            <strong>Romans 8:29</strong> - "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son, that he might be the firstborn among many brethren."
          </p>
        </div>
      </div>

      {/* Discussion Section */}
      <div className="mt-12 p-8 bg-gray-800 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">Reflection Questions</h2>
        <ul className="list-disc pl-8 text-gray-300 leading-loose text-left">
          <li>How does Jesus&apos;s intercession shape our understanding of prayer?</li>
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