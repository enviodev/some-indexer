import assert = require("assert")
import { MockDb, LendPoolLoan } from "../generated/src/TestHelpers.gen";
import {
  EventsSummaryEntity,
  LendPoolLoan_LoanAuctionedEntity,
} from "../generated/src/Types.gen";

import { Addresses } from "../generated/src/bindings/Ethers.bs";

import { GLOBAL_EVENTS_SUMMARY_KEY } from "../src/EventHandlers";


const MOCK_EVENTS_SUMMARY_ENTITY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
  lendPoolLoan_LoanAuctionedCount: BigInt(0),
  lendPoolLoan_LoanCreatedCount: BigInt(0),
  lendPoolLoan_LoanLiquidatedCount: BigInt(0),
  lendPoolLoan_LoanRedeemedCount: BigInt(0),
  lendPoolLoan_LoanRepaidCount: BigInt(0),
  lendPoolLoan_LoanRepaidInterceptorUpdatedCount: BigInt(0),
  lendPoolLoan_LoanUpdatedCount: BigInt(0),
};

describe("LendPoolLoan contract LoanAuctioned event tests", () => {
  // Create mock db
  const mockDbInitial = MockDb.createMockDb();

  // Add mock EventsSummaryEntity to mock db
  const mockDbFinal = mockDbInitial.entities.EventsSummary.set(
    MOCK_EVENTS_SUMMARY_ENTITY
  );

  // Creating mock LendPoolLoan contract LoanAuctioned event
  const mockLendPoolLoanLoanAuctionedEvent = LendPoolLoan.LoanAuctioned.createMockEvent({
    user: Addresses.defaultAddress,
    loanId: 0n,
    nftAsset: Addresses.defaultAddress,
    nftTokenId: 0n,
    amount: 0n,
    borrowIndex: 0n,
    bidder: Addresses.defaultAddress,
    price: 0n,
    previousBidder: Addresses.defaultAddress,
    previousPrice: 0n,
    mockEventData: {
      chainId: 1,
      blockNumber: 0,
      blockTimestamp: 0,
      blockHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      srcAddress: Addresses.defaultAddress,
      transactionHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      transactionIndex: 0,
      logIndex: 0,
    },
  });

  // Processing the event
  const mockDbUpdated = LendPoolLoan.LoanAuctioned.processEvent({
    event: mockLendPoolLoanLoanAuctionedEvent,
    mockDb: mockDbFinal,
  });

  it("LendPoolLoan_LoanAuctionedEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualLendPoolLoanLoanAuctionedEntity = mockDbUpdated.entities.LendPoolLoan_LoanAuctioned.get(
      mockLendPoolLoanLoanAuctionedEvent.transactionHash +
        mockLendPoolLoanLoanAuctionedEvent.logIndex.toString()
    );

    // Creating the expected entity
    const expectedLendPoolLoanLoanAuctionedEntity: LendPoolLoan_LoanAuctionedEntity = {
      id:
        mockLendPoolLoanLoanAuctionedEvent.transactionHash +
        mockLendPoolLoanLoanAuctionedEvent.logIndex.toString(),
      user: mockLendPoolLoanLoanAuctionedEvent.params.user,
      loanId: mockLendPoolLoanLoanAuctionedEvent.params.loanId,
      nftAsset: mockLendPoolLoanLoanAuctionedEvent.params.nftAsset,
      nftTokenId: mockLendPoolLoanLoanAuctionedEvent.params.nftTokenId,
      amount: mockLendPoolLoanLoanAuctionedEvent.params.amount,
      borrowIndex: mockLendPoolLoanLoanAuctionedEvent.params.borrowIndex,
      bidder: mockLendPoolLoanLoanAuctionedEvent.params.bidder,
      price: mockLendPoolLoanLoanAuctionedEvent.params.price,
      previousBidder: mockLendPoolLoanLoanAuctionedEvent.params.previousBidder,
      previousPrice: mockLendPoolLoanLoanAuctionedEvent.params.previousPrice,
      eventsSummary: "GlobalEventsSummary",
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualLendPoolLoanLoanAuctionedEntity, expectedLendPoolLoanLoanAuctionedEntity, "Actual LendPoolLoanLoanAuctionedEntity should be the same as the expectedLendPoolLoanLoanAuctionedEntity");
  });

  it("EventsSummaryEntity is updated correctly", () => {
    // Getting the actual entity from the mock database
    let actualEventsSummaryEntity = mockDbUpdated.entities.EventsSummary.get(
      GLOBAL_EVENTS_SUMMARY_KEY
    );

    // Creating the expected entity
    const expectedEventsSummaryEntity: EventsSummaryEntity = {
      ...MOCK_EVENTS_SUMMARY_ENTITY,
      lendPoolLoan_LoanAuctionedCount: MOCK_EVENTS_SUMMARY_ENTITY.lendPoolLoan_LoanAuctionedCount + BigInt(1),
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEventsSummaryEntity, expectedEventsSummaryEntity, "Actual LendPoolLoanLoanAuctionedEntity should be the same as the expectedLendPoolLoanLoanAuctionedEntity");
  });
});
