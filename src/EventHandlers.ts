/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  LendPoolLoanContract,
} from "../generated/src/Handlers.gen";

import {
    LendPoolLoan_LoanAuctionedEntity,
    LendPoolLoan_LoanCreatedEntity,
    LendPoolLoan_LoanLiquidatedEntity,
    LendPoolLoan_LoanRedeemedEntity,
    LendPoolLoan_LoanRepaidEntity,
    LendPoolLoan_LoanRepaidInterceptorUpdatedEntity,
    LendPoolLoan_LoanUpdatedEntity,
EventsSummaryEntity
} from "../generated/src/Types.gen";

export const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
    lendPoolLoan_LoanAuctionedCount: BigInt(0),
    lendPoolLoan_LoanCreatedCount: BigInt(0),
    lendPoolLoan_LoanLiquidatedCount: BigInt(0),
    lendPoolLoan_LoanRedeemedCount: BigInt(0),
    lendPoolLoan_LoanRepaidCount: BigInt(0),
    lendPoolLoan_LoanRepaidInterceptorUpdatedCount: BigInt(0),
    lendPoolLoan_LoanUpdatedCount: BigInt(0),
};

    LendPoolLoanContract.LoanAuctioned.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LendPoolLoanContract.LoanAuctioned.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lendPoolLoan_LoanAuctionedCount: currentSummaryEntity.lendPoolLoan_LoanAuctionedCount + BigInt(1),
  };

  const lendPoolLoan_LoanAuctionedEntity: LendPoolLoan_LoanAuctionedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      loanId: event.params.loanId      ,
      nftAsset: event.params.nftAsset      ,
      nftTokenId: event.params.nftTokenId      ,
      amount: event.params.amount      ,
      borrowIndex: event.params.borrowIndex      ,
      bidder: event.params.bidder      ,
      price: event.params.price      ,
      previousBidder: event.params.previousBidder      ,
      previousPrice: event.params.previousPrice      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LendPoolLoan_LoanAuctioned.set(lendPoolLoan_LoanAuctionedEntity);
});
    LendPoolLoanContract.LoanCreated.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LendPoolLoanContract.LoanCreated.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lendPoolLoan_LoanCreatedCount: currentSummaryEntity.lendPoolLoan_LoanCreatedCount + BigInt(1),
  };

  const lendPoolLoan_LoanCreatedEntity: LendPoolLoan_LoanCreatedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      onBehalfOf: event.params.onBehalfOf      ,
      loanId: event.params.loanId      ,
      nftAsset: event.params.nftAsset      ,
      nftTokenId: event.params.nftTokenId      ,
      reserveAsset: event.params.reserveAsset      ,
      amount: event.params.amount      ,
      borrowIndex: event.params.borrowIndex      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LendPoolLoan_LoanCreated.set(lendPoolLoan_LoanCreatedEntity);
});
    LendPoolLoanContract.LoanLiquidated.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LendPoolLoanContract.LoanLiquidated.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lendPoolLoan_LoanLiquidatedCount: currentSummaryEntity.lendPoolLoan_LoanLiquidatedCount + BigInt(1),
  };

  const lendPoolLoan_LoanLiquidatedEntity: LendPoolLoan_LoanLiquidatedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      loanId: event.params.loanId      ,
      nftAsset: event.params.nftAsset      ,
      nftTokenId: event.params.nftTokenId      ,
      reserveAsset: event.params.reserveAsset      ,
      amount: event.params.amount      ,
      borrowIndex: event.params.borrowIndex      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LendPoolLoan_LoanLiquidated.set(lendPoolLoan_LoanLiquidatedEntity);
});
    LendPoolLoanContract.LoanRedeemed.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LendPoolLoanContract.LoanRedeemed.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lendPoolLoan_LoanRedeemedCount: currentSummaryEntity.lendPoolLoan_LoanRedeemedCount + BigInt(1),
  };

  const lendPoolLoan_LoanRedeemedEntity: LendPoolLoan_LoanRedeemedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      loanId: event.params.loanId      ,
      nftAsset: event.params.nftAsset      ,
      nftTokenId: event.params.nftTokenId      ,
      reserveAsset: event.params.reserveAsset      ,
      amountTaken: event.params.amountTaken      ,
      borrowIndex: event.params.borrowIndex      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LendPoolLoan_LoanRedeemed.set(lendPoolLoan_LoanRedeemedEntity);
});
    LendPoolLoanContract.LoanRepaid.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LendPoolLoanContract.LoanRepaid.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lendPoolLoan_LoanRepaidCount: currentSummaryEntity.lendPoolLoan_LoanRepaidCount + BigInt(1),
  };

  const lendPoolLoan_LoanRepaidEntity: LendPoolLoan_LoanRepaidEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      loanId: event.params.loanId      ,
      nftAsset: event.params.nftAsset      ,
      nftTokenId: event.params.nftTokenId      ,
      reserveAsset: event.params.reserveAsset      ,
      amount: event.params.amount      ,
      borrowIndex: event.params.borrowIndex      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LendPoolLoan_LoanRepaid.set(lendPoolLoan_LoanRepaidEntity);
});
    LendPoolLoanContract.LoanRepaidInterceptorUpdated.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LendPoolLoanContract.LoanRepaidInterceptorUpdated.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lendPoolLoan_LoanRepaidInterceptorUpdatedCount: currentSummaryEntity.lendPoolLoan_LoanRepaidInterceptorUpdatedCount + BigInt(1),
  };

  const lendPoolLoan_LoanRepaidInterceptorUpdatedEntity: LendPoolLoan_LoanRepaidInterceptorUpdatedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      nftAsset: event.params.nftAsset      ,
      tokenId: event.params.tokenId      ,
      interceptor: event.params.interceptor      ,
      approved: event.params.approved      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LendPoolLoan_LoanRepaidInterceptorUpdated.set(lendPoolLoan_LoanRepaidInterceptorUpdatedEntity);
});
    LendPoolLoanContract.LoanUpdated.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    LendPoolLoanContract.LoanUpdated.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    lendPoolLoan_LoanUpdatedCount: currentSummaryEntity.lendPoolLoan_LoanUpdatedCount + BigInt(1),
  };

  const lendPoolLoan_LoanUpdatedEntity: LendPoolLoan_LoanUpdatedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      user: event.params.user      ,
      loanId: event.params.loanId      ,
      nftAsset: event.params.nftAsset      ,
      nftTokenId: event.params.nftTokenId      ,
      reserveAsset: event.params.reserveAsset      ,
      amountAdded: event.params.amountAdded      ,
      amountTaken: event.params.amountTaken      ,
      borrowIndex: event.params.borrowIndex      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.LendPoolLoan_LoanUpdated.set(lendPoolLoan_LoanUpdatedEntity);
});
