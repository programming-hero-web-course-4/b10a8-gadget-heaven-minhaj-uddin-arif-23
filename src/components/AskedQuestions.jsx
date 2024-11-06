import React from "react";

export default function AskedQuestions() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-center my-7">
          Free Quently Asked Questions
        </h1>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How do I start selling with Gadget Heaven?
        </div>
        <div className="collapse-content">
          <p>
            Start by choosing a selling plan, then register with Gadget and
            create an Amazon seller account. Once you configure your account,
            you can list and price your products, select a fulfillment method,
            and explore options to promote and advertise.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How much does it cost to sell with Gadget?
        </div>
        <div className="collapse-content">
          <p>
            We offer two selling plans so you can choose the right package of
            tools and services for the right price. The Individual selling plan
            costs $0.99 per sale. The Professional selling plan costs $39.99 per
            month, no matter how many items you sell.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I fulfill customer orders?
        </div>
        <div className="collapse-content">
          <p>
            You have two basic options for getting customers their stuff: You
            can fulfill orders yourself, maintaining your own inventory and
            shipping products directly to customers. We call this Fulfilled by
            Merchant shipping. You can send your inventory to Gadget  and have us
            pick, pack, and deliver products through Fulfillment by Gadget
            (FBA). FBA also takes care of customer service and returns.
          </p>
        </div>
      </div>
    </div>
  );
}
