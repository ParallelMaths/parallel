const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");
const fetch = require("node-fetch");

const reportMap = {
  fPaBZtnOS4QfuxrGQ3DQjGhKGbP2: "ER-0c02c88a-78b9-4614-a004-19036cfbb2f5",
  DLDbAydoRfaZhx2KydaDjvPOUUb2: "ER-0c02c88a-78b9-4614-a004-19036cfbb2f5",
  "69MVT2PnZJOj0yW7KBtHflVc4aP2": "ER-0c02c88a-78b9-4614-a004-19036cfbb2f5",
  zHLcJV6Zuxaam4XU8XTWk8k5f0i1: "ER-0c02c88a-78b9-4614-a004-19036cfbb2f5",
  c5Ojr3j2WTO36dmGqvtQGApEJjA3: "ER-0c02c88a-78b9-4614-a004-19036cfbb2f5",
  aFhWk8yb8jSSXTWlBQzcz5XOMsr2: "ER-095587cd-5520-4e0a-94c4-b27a6c524d06",
  Qwb3Lte9N7aBlpmQc7aiy9hvJXv1: "ER-095587cd-5520-4e0a-94c4-b27a6c524d06",
  "5Ou9Ou4biYYelqrdhUC1hiEEQDo1": "ER-095587cd-5520-4e0a-94c4-b27a6c524d06",
  t0j7z4gV7PYCcqyUgTSEZ2aCOY42: "ER-095587cd-5520-4e0a-94c4-b27a6c524d06",
  qCPt3WxTawT5fieChoVHjgkmReu2: "ER-095587cd-5520-4e0a-94c4-b27a6c524d06",
  "9AshLStrkaOzNueVU0viSom5bO33": "ER-095587cd-5520-4e0a-94c4-b27a6c524d06",
  LMhykyRG3jPq2Ttm5q3CmfA0pmy1: "ER-cf3e5abb-ef95-42c2-a7a1-87712c7e7845",
  H1xriYncurM7FoZ9u3BI86vREhi2: "ER-cf3e5abb-ef95-42c2-a7a1-87712c7e7845",
  K7t3oHsDDiNXkw7Sxl6LjEti6kK2: "ER-cf3e5abb-ef95-42c2-a7a1-87712c7e7845",
  HlqYUn9YlsUAo1Lsjbps6ekbgcm2: "ER-cf3e5abb-ef95-42c2-a7a1-87712c7e7845",
  NI88GRPdmgbi1ogQwHNpxZkj16e2: "ER-cf3e5abb-ef95-42c2-a7a1-87712c7e7845",
  kqu67yMPCJTu5HlH7TRyrUA4qDx2: "ER-cf3e5abb-ef95-42c2-a7a1-87712c7e7845",
  gh6cn4X2Y0QsaHFSVuvOjJ21D3M2: "ER-986650e1-b032-432c-97d9-0244b46320a3",
  wCM23ZqAChfyoBr2Gf5Z23Y9Apz2: "ER-986650e1-b032-432c-97d9-0244b46320a3",
  RLtpSXRY3UUxC6PZK6dZ3OislEx1: "ER-986650e1-b032-432c-97d9-0244b46320a3",
  flfRs84fqaegIUXuL5b6olJOWxB3: "ER-986650e1-b032-432c-97d9-0244b46320a3",
  DNBN7hQaYmgzClsOIlbLVBI4UKd2: "ER-d10a16ab-c3b3-429c-9a3d-216cb4dd80e1",
  KAd3IFnN0Vgb0BCegSfwosMbta62: "ER-d10a16ab-c3b3-429c-9a3d-216cb4dd80e1",
  snp3uiMFTPhk5BQYLlJ7NZBwpXY2: "ER-d10a16ab-c3b3-429c-9a3d-216cb4dd80e1",
  KMihGbsM16MjlWqVEiuTK6y5QSm2: "ER-d10a16ab-c3b3-429c-9a3d-216cb4dd80e1",
  K9zEya8O8UceW44qfwFjNlyP78t2: "ER-9ead0a58-8c28-44d1-a2ae-dcdde41f72c6",
  NhWkZeUd6rY3XuqXMQsC8szIJ4r2: "ER-9ead0a58-8c28-44d1-a2ae-dcdde41f72c6",
  XTeIjgqL3jP761WFMsLIK8b82J92: "ER-9ead0a58-8c28-44d1-a2ae-dcdde41f72c6",
  PN4chkaoDTQd9i8lm1OLb4nLuJa2: "ER-9ead0a58-8c28-44d1-a2ae-dcdde41f72c6",
  IDhbxnrNJRfzaTKaUlys4KV4THn1: "ER-9ead0a58-8c28-44d1-a2ae-dcdde41f72c6",
  BW7HM3vlEyMCUuwhbODUUmQgRTY2: "ER-9ead0a58-8c28-44d1-a2ae-dcdde41f72c6",
  AGI4eEZB9Gg4X05cYlSasbrHNZj2: "ER-c9d249c3-5cd9-4dd7-ae66-d04e805f9c0c",
  ePpAw82W8gVTIjua5dzNOg1iKoG2: "ER-c9d249c3-5cd9-4dd7-ae66-d04e805f9c0c",
  tnfxRmGGshY3zHxMvqVeF9OA4Wq2: "ER-c9d249c3-5cd9-4dd7-ae66-d04e805f9c0c",
  OnKE77fRi8TzzNZLgm6Nd92Z9KA2: "ER-c9d249c3-5cd9-4dd7-ae66-d04e805f9c0c",
  AQSXaVWRY4f1cQUh3IFkifLEtvA2: "ER-c9d249c3-5cd9-4dd7-ae66-d04e805f9c0c",
  nlTJjHI4pzVjZWcOkvTuE6aUie12: "ER-da712263-99eb-4794-b175-ad2ec3520d42",
  y12nzNaDMlhLQnIA3SkA5LDR3Vy2: "ER-da712263-99eb-4794-b175-ad2ec3520d42",
  j9mgSQz9tFRK7BjeK6KSoueTcIo2: "ER-da712263-99eb-4794-b175-ad2ec3520d42",
  IVmkH58WsAX1bv3UMsfIVnvCRcv2: "ER-da712263-99eb-4794-b175-ad2ec3520d42",
  "8B2DvokyvugRAXYBM1b4ocFMhTp1": "ER-da712263-99eb-4794-b175-ad2ec3520d42",
  Euzvyya5IlM8DY5TaxsbFD7iDQI2: "ER-cb837737-e4e0-48ae-9d84-381350b2304c",
  "0MHE0yqxNDWi8IbexAYclpJR0W83": "ER-cb837737-e4e0-48ae-9d84-381350b2304c",
  CYhbxh7F8TZknVxh8pHkbZZnJqw1: "ER-cb837737-e4e0-48ae-9d84-381350b2304c",
  C6Qum78uM1PXnCsFCN8uaVCvEZ03: "ER-cb837737-e4e0-48ae-9d84-381350b2304c",
  "3nIIZxTkaBev4cFSn1ULeLHXLCn2": "ER-cb837737-e4e0-48ae-9d84-381350b2304c",
  kNwWTmFsbUPU9HQw4H4tWiFNzbM2: "ER-f0e820ac-449a-4832-b84c-043801f28a24",
  jqbiqfGw8JSl1Ck1TQCFpQz34vo1: "ER-f0e820ac-449a-4832-b84c-043801f28a24",
  xjXuUAkxI9YaoOS4fW69PTJBZrB3: "ER-f0e820ac-449a-4832-b84c-043801f28a24",
  CUDc8gJpoMQr7SdDkpRDnkLhzTh2: "ER-f0e820ac-449a-4832-b84c-043801f28a24",
  T2uywGsLwnfy2ZmWgPaOqac4Lih1: "ER-f0e820ac-449a-4832-b84c-043801f28a24",
  r1wx1380m3PGn990SfNP34qfxl12: "ER-8dbd0e8f-8447-423d-88b9-4791c7c951a3",
  OZCDTbAczoOiPlxq2WWq1hiIzat2: "ER-8dbd0e8f-8447-423d-88b9-4791c7c951a3",
  "4krdZPxWReM9ZX84aKtKq7UowJn2": "ER-8dbd0e8f-8447-423d-88b9-4791c7c951a3",
  FQCw2h6mcqRvQLGUM4AcH3VVF1y1: "ER-8dbd0e8f-8447-423d-88b9-4791c7c951a3",
  dPwnnZaPlPaXdqg4pOx4p6b4OMm2: "ER-84445bfa-97ed-4814-a70f-6b250b254509",
  "3gcF56JLFlgpPptUZn3ft9pTHxC3": "ER-84445bfa-97ed-4814-a70f-6b250b254509",
  OZ7K9554M1MMBVnh3xDLFSvd9Vl2: "ER-84445bfa-97ed-4814-a70f-6b250b254509",
  "07AP2RrwdPd2xsjb8qQT4jvuEgp2": "ER-84445bfa-97ed-4814-a70f-6b250b254509",
  eR4MGdtO1zYbHVr9Sj2nuy8uAUn2: "ER-84445bfa-97ed-4814-a70f-6b250b254509",
  Ikr85MW7bjanLUUfA2sJJDXNSPw1: "ER-b4875a21-faaf-4a36-bc1d-59c86accd792",
  c6r3rE0kkXPxLnSvAWd4wSswIuz1: "ER-b4875a21-faaf-4a36-bc1d-59c86accd792",
  "4PMd6IGvJiZUsdvJ2R00muZwKkL2": "ER-b4875a21-faaf-4a36-bc1d-59c86accd792",
  rhnEPfPBygaTlGdoTdYXjWmWx3q2: "ER-b4875a21-faaf-4a36-bc1d-59c86accd792",
  WZdTzSJVrYQt574Ibqx6pa1CG8y2: "ER-03f550d5-8c10-4d9d-a00f-198f23cedff4",
  rEClfyHoAwXHMPQ4QRGcSfcYnF13: "ER-03f550d5-8c10-4d9d-a00f-198f23cedff4",
  "01INjwVDeAPBhCVU83pmzyO3zvr1": "ER-03f550d5-8c10-4d9d-a00f-198f23cedff4",
  EfsjiVF8auSZkH0lluE9xuBKrmW2: "ER-03f550d5-8c10-4d9d-a00f-198f23cedff4",
  oXpSkKZCJDUmchMsdCweQ9BKVL93: "ER-03f550d5-8c10-4d9d-a00f-198f23cedff4",
  azXLxrqE0ef4TQJYpHXpAyzqGuc2: "ER-03f550d5-8c10-4d9d-a00f-198f23cedff4",
  "6YDB4tj5vnaSEysoT9D61n1kxpV2": "ER-982406e4-090f-47ef-8eb6-1e1f7b2cb7eb",
  UQw2KWhlurepZkfuhpe6NlOtiXO2: "ER-982406e4-090f-47ef-8eb6-1e1f7b2cb7eb",
  EdWz0fBWQITTM4KaPkqM5Tb8gR22: "ER-982406e4-090f-47ef-8eb6-1e1f7b2cb7eb",
  OHbmh1MWkHYGunC9EhosT43XWCo1: "ER-982406e4-090f-47ef-8eb6-1e1f7b2cb7eb",
  OHmmfQTQYycPKb8mmAkshPfyfJ83: "ER-982406e4-090f-47ef-8eb6-1e1f7b2cb7eb",
  WZNzJc1kVyP6OikdBA92Yv4j9I12: "ER-982406e4-090f-47ef-8eb6-1e1f7b2cb7eb",
  "95seGKugHJYQSlVN3e1klyeLcPg1": "ER-deb3d856-3aba-4d81-b0ca-526f31a743a9",
  VWwCH6wUtuSUMJF5vbPY94fhyHS2: "ER-deb3d856-3aba-4d81-b0ca-526f31a743a9",
  NvoEsS8l5gMDV6XRQGeXcYnz3hg2: "ER-deb3d856-3aba-4d81-b0ca-526f31a743a9",
  om5IemsngEggxzwNrRT7Qkq4dXs2: "ER-deb3d856-3aba-4d81-b0ca-526f31a743a9",
  eofIA501HvYDWP37h9WC6J0ODyT2: "ER-8c295da4-6891-419a-b525-f9bfaa354aca",
  buYgnoQ5YjSDSJvSyNjF6X3lMxP2: "ER-8c295da4-6891-419a-b525-f9bfaa354aca",
  LPikPMobRJbqTvIfH3GdplGJMzH3: "ER-8c295da4-6891-419a-b525-f9bfaa354aca",
  PsKzif0PnmfiO9T3TrgjVWwxyAH2: "ER-8c295da4-6891-419a-b525-f9bfaa354aca",
  QTSgQKdYU1XGtLCt1ntDd3IcJK83: "ER-8c295da4-6891-419a-b525-f9bfaa354aca",
  mxfkHIT91schOkCpk2p4fa5RRX43: "ER-144834dc-1f66-4d4a-a55d-230e3db20514",
  DkBCBEGXJHft0g41A49E28qy1QU2: "ER-144834dc-1f66-4d4a-a55d-230e3db20514",
  vJWlfNO3V8VzdBIBXHImuMpXG8u2: "ER-144834dc-1f66-4d4a-a55d-230e3db20514",
  BXGrEJPzr6OTyH0cbWFw9TTa8IF2: "ER-144834dc-1f66-4d4a-a55d-230e3db20514",
  OKHwDPOmjATV4fP2V2BD0rg9rXp2: "ER-144834dc-1f66-4d4a-a55d-230e3db20514",
  cvQYMJfJpCcKjB5lsmBIwWV5Ytn1: "ER-b688c48e-121b-4c05-98f3-c16c034d218a",
  zvOFgnxyPzRSDvHX3mZ9nlVj4603: "ER-b688c48e-121b-4c05-98f3-c16c034d218a",
  Gvdy98qzSkM4OUqwajoAMos1dJ32: "ER-b688c48e-121b-4c05-98f3-c16c034d218a",
  g5Q3M8UhOoWweuHAvisfL4H2ySu1: "ER-b688c48e-121b-4c05-98f3-c16c034d218a",
  NNVWySxWG1TENXK2CZd5MDgSLVH3: "ER-b688c48e-121b-4c05-98f3-c16c034d218a",
  lmgwgcpgKoRHcWQ5eiv6OwkRnkr1: "ER-f2f84c95-34ab-4605-93ef-d6f623656da2",
  PjhNYuvAtagKBviTelBqAgGXlG92: "ER-f2f84c95-34ab-4605-93ef-d6f623656da2",
  JtzbvJNKqESvexghygmTDiv7IX03: "ER-f2f84c95-34ab-4605-93ef-d6f623656da2",
  L5fpR3YJYGgvIeQ2KZslthOSplH3: "ER-f2f84c95-34ab-4605-93ef-d6f623656da2",
  ExdV4ch0FFaJqxPIAI51zixm3nK2: "ER-f2f84c95-34ab-4605-93ef-d6f623656da2",
  LL6Ut8EBZ7RPfmGk3u0fKmxSr7P2: "ER-107c918d-f2bf-4d7a-9af4-b1c087ae6896",
  B8a4R4lYIFccSPXYLUghJHRq4Gk1: "ER-107c918d-f2bf-4d7a-9af4-b1c087ae6896",
  ys05cVTjFFVNTblLyIqLslu3uzh1: "ER-107c918d-f2bf-4d7a-9af4-b1c087ae6896",
  YxqYOL9kk1NDTT1gNUdCqBkvwSv2: "ER-107c918d-f2bf-4d7a-9af4-b1c087ae6896",
  "5xnj5S50mkYnfIehgPzo33qFbNp2": "ER-107c918d-f2bf-4d7a-9af4-b1c087ae6896",
  qoXf0dfeNiTKmlSMWRiAPF9HxJu2: "ER-107c918d-f2bf-4d7a-9af4-b1c087ae6896",
  t8hH0FQxJhRfbZwDXW3GdcRFD9x2: "ER-97626bf1-fd45-4f9c-a0d1-c1ccc834b5bf",
  bZvXVLxIuCduSBHT5bjHhg82KZ32: "ER-97626bf1-fd45-4f9c-a0d1-c1ccc834b5bf",
  XhiHFEqEaHaV8LeokjcbleehCkt2: "ER-97626bf1-fd45-4f9c-a0d1-c1ccc834b5bf",
  wByeihU7fFUT7CBRhUI4rLoUjsM2: "ER-97626bf1-fd45-4f9c-a0d1-c1ccc834b5bf",
  x6bxDZ2U0tUucgto73tbemAht4r2: "ER-97626bf1-fd45-4f9c-a0d1-c1ccc834b5bf",
  "5HZjDkGRtRczLduuhOwZSfeUt3J3": "ER-7a92649a-e553-4849-b3f8-c422982af191",
  mSzEC7XamAdAiZ7VnTNMcFPEH0Q2: "ER-7a92649a-e553-4849-b3f8-c422982af191",
  ykJA08gehncGpNAckySukk3H0HD2: "ER-7a92649a-e553-4849-b3f8-c422982af191",
  SjrZZxwd5jfM2iNgPoZJUwKXdlw1: "ER-7a92649a-e553-4849-b3f8-c422982af191",
  Mdr1RNkSPCOfOmMBHst3o2x3zcS2: "ER-7a92649a-e553-4849-b3f8-c422982af191",
  X1LDcVErkQWPCg2veneTB2RlKEq1: "ER-d2e872ed-0f12-4e03-a046-3fc3c46ffef0",
  "9mGlKN3Rp1WreJ7aZyBxnnM6AYO2": "ER-d2e872ed-0f12-4e03-a046-3fc3c46ffef0",
  nTZ3taMnvPfAx33VfqI7bz5GGHq1: "ER-d2e872ed-0f12-4e03-a046-3fc3c46ffef0",
  Ul7RrQMhIRX3aqncGwbssKzMNXx1: "ER-d2e872ed-0f12-4e03-a046-3fc3c46ffef0",
  p7wItTnOyibC9Mr6PpbgxmwQ4br1: "ER-d2e872ed-0f12-4e03-a046-3fc3c46ffef0",
  pKzJSt6RX2gvVm52PmQQ8hfxF4g2: "ER-d2e872ed-0f12-4e03-a046-3fc3c46ffef0",
  SiuDaA5IVUPakG6dqBvvJ882xZG2: "ER-739f0cf2-0570-417a-96f5-6452c9edf38a",
  N7aC324CZJfkeXbksYeW6pck4PF3: "ER-739f0cf2-0570-417a-96f5-6452c9edf38a",
  cT1ESSgIynfNFNVBKSUUvojgCil2: "ER-739f0cf2-0570-417a-96f5-6452c9edf38a",
  LBKMCT3ExlOQxHx3henzc96T1i92: "ER-739f0cf2-0570-417a-96f5-6452c9edf38a",
  WMFkrNQfFeaAh2pADm2r7IcEDp62: "ER-739f0cf2-0570-417a-96f5-6452c9edf38a",
  larnlFhD1ZcCMxKfcjTJY6wwiLq1: "ER-c90fd616-33c2-4dc9-a064-79dbf47ea914",
  Y5F2oOGEVpVRt36UCMScykh1V6x2: "ER-c90fd616-33c2-4dc9-a064-79dbf47ea914",
  Jmf7Nvx9K1Tk2fwM1NiT7feMrSx2: "ER-c90fd616-33c2-4dc9-a064-79dbf47ea914",
  tttAEvQcUDd6q2MfcdIDP9toaCn2: "ER-c90fd616-33c2-4dc9-a064-79dbf47ea914",
  FdTt3c2054gTjkPdTe3EHmmoZTd2: "ER-c90fd616-33c2-4dc9-a064-79dbf47ea914",
  cxmVYrf2Pjds9HwChfBNqhH322g2: "ER-6ce7c731-e0ce-4767-b02e-0529b464d99e",
  GB7o8qQWHRViFnORkREZEwZgqIM2: "ER-6ce7c731-e0ce-4767-b02e-0529b464d99e",
  kqtmSt6SfNReKm9bHsNBuKVd5Ht1: "ER-6ce7c731-e0ce-4767-b02e-0529b464d99e",
  WrjqmGGQgASKEppEYpCEk6CubZ53: "ER-6ce7c731-e0ce-4767-b02e-0529b464d99e",
  QNbRVxlg0HXJ50Ol7bBEDRD0tZA2: "ER-6ce7c731-e0ce-4767-b02e-0529b464d99e",
  nk8RKGS3dmM8xEUS0iHcvjOqW7C2: "ER-7d325d86-a284-4a2b-ad6f-7d2c302f689e",
  EIV7S1iN8zN3OaDzFc2xLxstGub2: "ER-7d325d86-a284-4a2b-ad6f-7d2c302f689e",
  awKaftHf3nRImBPIntMu8oZmpS53: "ER-7d325d86-a284-4a2b-ad6f-7d2c302f689e",
  TNjbSIFCWIOrPiWeJYTPTvEMAAm1: "ER-7d325d86-a284-4a2b-ad6f-7d2c302f689e",
  mWGBbsqcN6QO4eFYw4RTcvkNZIU2: "ER-b78895d7-ec72-4333-8d69-6b4cf2badc11",
  sOj4iJdUwFdbC2q8SLyX8oySHYL2: "ER-b78895d7-ec72-4333-8d69-6b4cf2badc11",
  "6eKZ7NX2u5TZr02bMb3TkW6y4g52": "ER-b78895d7-ec72-4333-8d69-6b4cf2badc11",
  So5SppvRspVrFyx5XcK7dpYv0nB2: "ER-b78895d7-ec72-4333-8d69-6b4cf2badc11",
  "9eLrcegFoRYIvv4OjrRSEPZebVh1": "ER-4a8c1c5e-422f-46ae-8eca-910a68203f3a",
  DULJWRqiTQdsIJGe7nnBRToOhZf2: "ER-4a8c1c5e-422f-46ae-8eca-910a68203f3a",
  q972upE1GhZekdIwAsY4jE2obS02: "ER-3456e787-af90-4fd8-b545-61d47b43c1c5",
  qMxUVnxEqqe2E5EULBoXi3bAxcs1: "ER-3456e787-af90-4fd8-b545-61d47b43c1c5",
  NDTcLYhnbXTdBQzyGdoOsvNpvtb2: "ER-3456e787-af90-4fd8-b545-61d47b43c1c5",
  lAyn6QxPqdWZUVcX03iPqjVYvx52: "ER-3456e787-af90-4fd8-b545-61d47b43c1c5",
  nq0ySYCBgnQ1ZvjJmQeThZ6o0q92: "ER-3456e787-af90-4fd8-b545-61d47b43c1c5",
  "7NPqF998d4cxtguFF4ciDQtIK4P2": "ER-3456e787-af90-4fd8-b545-61d47b43c1c5",
  oFToGRcdhpb967Oljo7LA8yU92j2: "ER-2f2fb6d8-6f07-4b9a-928b-24d3c2362853",
  "1dXzCahlirTbxcT9gqYAhvuiKID2": "ER-2f2fb6d8-6f07-4b9a-928b-24d3c2362853",
  OHvKiSGbhXVtoBf12wYMc86Qj9y2: "ER-2f2fb6d8-6f07-4b9a-928b-24d3c2362853",
  xFBNFeb683Purttag2lJHpiHeGk2: "ER-2f2fb6d8-6f07-4b9a-928b-24d3c2362853",
  bgab2XR8ejQ6XsHlbvLWPwon4Xb2: "ER-2f2fb6d8-6f07-4b9a-928b-24d3c2362853",
  axIvMMeMP2MHDHesxtPyj81bukF2: "ER-2f2fb6d8-6f07-4b9a-928b-24d3c2362853",
  g4LpTozRQLQL9vHyntnbLXKSwUs1: "ER-5a7136fb-9fa4-440a-a103-208a6f9311d7",
  sb3cVFam6JXIroNURKgUgXPK32x1: "ER-5a7136fb-9fa4-440a-a103-208a6f9311d7",
  "54mtGjFAPjXgxADxLOBWvbC9u2o2": "ER-5a7136fb-9fa4-440a-a103-208a6f9311d7",
  "4MAH7bJXc8Qj1QLOXt1vxgCTiRP2": "ER-5a7136fb-9fa4-440a-a103-208a6f9311d7",
  ovzeed5FhxV74nytzjkM5FVyOMc2: "ER-5a7136fb-9fa4-440a-a103-208a6f9311d7",
  pbMEZfIu5sdHEdGSlGevcGa1JZm2: "ER-505f2eb1-d560-42df-9ee8-a2a0d52dc247",
  omOOcuN9hFQ97vFC2TYpxusvFam1: "ER-505f2eb1-d560-42df-9ee8-a2a0d52dc247",
  toUozrA6rpYSltGCnpcKlalzgXH2: "ER-505f2eb1-d560-42df-9ee8-a2a0d52dc247",
  tRCw7eD0QNW7X3fQdkwf5cm5PY32: "ER-505f2eb1-d560-42df-9ee8-a2a0d52dc247",
  l0yDqJN6MxTUiwX0v7RrPEowkwJ2: "ER-505f2eb1-d560-42df-9ee8-a2a0d52dc247",
  izfsQpvK9TRqAhytfb50mMVDt512: "ER-56c4dcbd-ffba-4902-8b98-f5fbcfd8b546",
  CvDqLIzzy9Ya2X5ExSY7jy4n3qj1: "ER-56c4dcbd-ffba-4902-8b98-f5fbcfd8b546",
  XTbLjB8w4fNPrwMrcdJuFbppkJd2: "ER-56c4dcbd-ffba-4902-8b98-f5fbcfd8b546",
  "0X7nWQhO2Gcn5q1XvZ4IqgEjR1D2": "ER-56c4dcbd-ffba-4902-8b98-f5fbcfd8b546",
  SQH8wbzrLnUYjCKg6Z5hLTST97o1: "ER-56c4dcbd-ffba-4902-8b98-f5fbcfd8b546",
  SyeHKvJqMlbyUNl05WMYESY0oFt2: "ER-56c4dcbd-ffba-4902-8b98-f5fbcfd8b546",
  "3ZCBPCGk53cCFOn4TA4DGuubQRx2": "ER-9f1baea6-1627-40be-99d8-7784fdb651fd",
  Hsv9yHx6XpbwEpNLilVPwdkLBlH2: "ER-9f1baea6-1627-40be-99d8-7784fdb651fd",
  "003YooTqsvT7vMeGEQQtqx2bSlX2": "ER-9f1baea6-1627-40be-99d8-7784fdb651fd",
  hpbcljEdlaPsoskcVBtJnjnFt9o2: "ER-9f1baea6-1627-40be-99d8-7784fdb651fd",
  spNA9mDHxgTiVxEeUHYWOYI71Iz1: "ER-2efa905f-bc7d-45a8-9546-ad8b1a2896c6",
  T8xDqmWTcpMQ8UCqRUdFm4hZseT2: "ER-2efa905f-bc7d-45a8-9546-ad8b1a2896c6",
  FycUnqFVsxUVj6vSxak0A8WpCv63: "ER-2efa905f-bc7d-45a8-9546-ad8b1a2896c6",
  MgDjzvRPTAawX6IRc4J1PrYa02D2: "ER-2efa905f-bc7d-45a8-9546-ad8b1a2896c6",
  lpwDUoIhIKdNkfy5Sh95drB412v2: "ER-dc9bd222-c14d-4f26-b58b-756429c77d98",
  drXvSGUQNIQ9pjgKx51ju5zkiyn1: "ER-dc9bd222-c14d-4f26-b58b-756429c77d98",
  S5BqHo6wFqcDd91Q74A0qI5DNpK2: "ER-dc9bd222-c14d-4f26-b58b-756429c77d98",
  gPvFNTWdyiZBqftyLBnHnibODep1: "ER-dc9bd222-c14d-4f26-b58b-756429c77d98",
  "6hGkjMyQgRZPMuihvGTnKHKUp2F2": "ER-dc9bd222-c14d-4f26-b58b-756429c77d98",
  Y4MiBBm11AUX86PT5lQfmme9mtJ3: "ER-9c1c12f9-df02-4fef-bab9-581357c6cab9",
  BRbdtsxBGgfYSdvBl8q72rO2QgQ2: "ER-9c1c12f9-df02-4fef-bab9-581357c6cab9",
  "9va5PQjGYaRCpwMSwlKdz3ylV3D2": "ER-9c1c12f9-df02-4fef-bab9-581357c6cab9",
  fDF6Ic7fkMRzjEeAx1765IcnKjN2: "ER-9c1c12f9-df02-4fef-bab9-581357c6cab9",
  Zvsjf8zhQsSRyjt8IBLrBmDR1k92: "ER-c5600873-0a13-4266-83d2-cf53eccbff33",
  HN7crQSyfjWEPBqCx98KdK6vFn02: "ER-c5600873-0a13-4266-83d2-cf53eccbff33",
  VOXouKHxsccu78BLsmBpul1GiCj1: "ER-c5600873-0a13-4266-83d2-cf53eccbff33",
  GhxZkm8izUP5uEHIB6y5N878v2C2: "ER-c5600873-0a13-4266-83d2-cf53eccbff33",
  UODbHjLBzJbhmPReJ7zuTxTurms1: "ER-de739419-2c7d-450a-9f0b-4d7d0ff6d7f6",
  "35ZwjzefKef2ariKf7wQaFLT8cU2": "ER-de739419-2c7d-450a-9f0b-4d7d0ff6d7f6",
  "63bOec03kadYUM5WJy63lZjEuef2": "ER-de739419-2c7d-450a-9f0b-4d7d0ff6d7f6",
  CB8py66bcphQ4upVmDQBF0TLhds2: "ER-de739419-2c7d-450a-9f0b-4d7d0ff6d7f6",
  bfzdQJf0zQhDWlberBDG20gjfBt2: "ER-de739419-2c7d-450a-9f0b-4d7d0ff6d7f6",
  t7kYCMcZHaP3RQMC76dN7khHYFh2: "ER-de739419-2c7d-450a-9f0b-4d7d0ff6d7f6",
  XAM5MPjNHLXZqWUScRu97oCku0A3: "ER-8ff2553d-042b-4dd6-bde4-e9b42d319374",
  fpOOdV8n6kZKRXIU9Bbd9rY9V4L2: "ER-8ff2553d-042b-4dd6-bde4-e9b42d319374",
  UDrVDYv1U8RIXeMH5C70aFaqbXH2: "ER-8ff2553d-042b-4dd6-bde4-e9b42d319374",
  I8mTSS1JBUO5cRo95uVbM5E9SsM2: "ER-8ff2553d-042b-4dd6-bde4-e9b42d319374",
  TFqcrr20LxYbwcDJqFqGurb4fDr2: "ER-8ff2553d-042b-4dd6-bde4-e9b42d319374",
  pUQQEF1VNqP9rPqwsOg7iSK5PX62: "ER-5b5edfd9-a3e7-462d-a4a6-303c61bfa125",
  V95QSSsv8mNi848Kxj67pQovNQR2: "ER-5b5edfd9-a3e7-462d-a4a6-303c61bfa125",
  JB5V6rbek2Yq0Db2jVVZAE4ftWu2: "ER-5b5edfd9-a3e7-462d-a4a6-303c61bfa125",
  GoPr8qWOZEdUzNmwmGOUz2h2MAl1: "ER-5b5edfd9-a3e7-462d-a4a6-303c61bfa125",
  DRcdram3NKXZG9uph5GUgiggOWX2: "ER-af1d1c8d-cd58-4906-a454-c4016f79e5bd",
  yshdT9eY96Yc9rbsRinnuyiUnVJ3: "ER-af1d1c8d-cd58-4906-a454-c4016f79e5bd",
  UPUYC1xyOkQbf4TiistaDrZzxhr1: "ER-af1d1c8d-cd58-4906-a454-c4016f79e5bd",
  t2Qo5O8kvuSc4RpfSf3E4nvTjGA2: "ER-af1d1c8d-cd58-4906-a454-c4016f79e5bd",
  kGBVVtEa3fOezLOSOFnC6Y9iFyz1: "ER-af1d1c8d-cd58-4906-a454-c4016f79e5bd",
  r9LRCSQtXWP3DmePIex4VJi5L2k1: "ER-af1d1c8d-cd58-4906-a454-c4016f79e5bd",
  KYkUeelDrYZizM67u6mflRUgpYI2: "ER-492045a0-46c4-4a2a-93e1-5039d0f5459f",
  y5oI66q9dhZx99Zcd5eLljsx3aT2: "ER-492045a0-46c4-4a2a-93e1-5039d0f5459f",
  AsxjNFty02PIhQl5PT7bDzLJ9rq2: "ER-492045a0-46c4-4a2a-93e1-5039d0f5459f",
  bv3gSmDdB4N0wZDTEXrMFBWLosk1: "ER-492045a0-46c4-4a2a-93e1-5039d0f5459f",
  kGtZo24IfsQIydXrCicIVTzXAHn1: "ER-492045a0-46c4-4a2a-93e1-5039d0f5459f",
  hVq5e7rY41OrwL463rUFpv8Cyin2: "ER-492045a0-46c4-4a2a-93e1-5039d0f5459f",
  vNME67161gMVnf0JDsTcp46Lp2c2: "ER-8d9c2bf4-2d77-4b7c-9972-c3b510285f58",
  XCHMD0iGWxfaZ53hhBkdif1vMfh2: "ER-8d9c2bf4-2d77-4b7c-9972-c3b510285f58",
  u67wDRL8dcc55NtEH69nbYbW35C3: "ER-8d9c2bf4-2d77-4b7c-9972-c3b510285f58",
  "1Sb99eMoRUcYVCHL0z6dUPRdz0B2": "ER-8d9c2bf4-2d77-4b7c-9972-c3b510285f58",
  q54bYF920KXkIitBrejgahPXrmf2: "ER-8d9c2bf4-2d77-4b7c-9972-c3b510285f58",
  arkBfMyyh8eq8dHAC4Un9GaZYPi2: "ER-8d9c2bf4-2d77-4b7c-9972-c3b510285f58",
  "5u4IX3AEqgNncmvHMmbBawRoKDr2": "ER-793b31fc-9211-4092-a85b-0ab631d7dadd",
  "9Mdqep7EmOT2opETAdw2Wyr5ghU2": "ER-793b31fc-9211-4092-a85b-0ab631d7dadd",
  pxzqRRtwNbdYXu8Fz4IN2Qu29LF2: "ER-793b31fc-9211-4092-a85b-0ab631d7dadd",
  "6kO9J0L9M5RzMwUTMyDNSXobig02": "ER-00a38258-f369-4f0a-96ac-f4aa796e9598",
  juw8SqoIGnNPi7KgDb50JdF4r7t1: "ER-00a38258-f369-4f0a-96ac-f4aa796e9598",
  YXuk6AVp2GNKWGQ9bGoOfIO8BAg2: "ER-00a38258-f369-4f0a-96ac-f4aa796e9598",
  dBeiOCTDUheIlHHusUW6RI8HUQ33: "ER-00a38258-f369-4f0a-96ac-f4aa796e9598",
  BpwXyFG46mc5MaGyY7tYHkzmYOU2: "ER-00a38258-f369-4f0a-96ac-f4aa796e9598",
  v1096PBQtEOYsfrREG1t3VNif3k1: "ER-f020fdb6-572f-48cc-b947-66127cf9d8f0",
  o5RbCis5uwX1Rq5kZzjx6YtdCMs2: "ER-f020fdb6-572f-48cc-b947-66127cf9d8f0",
  woVuDIFCsAY4dTrEK6nlEsJEYwJ3: "ER-f020fdb6-572f-48cc-b947-66127cf9d8f0",
};

const auth_token = "";

const send = (
  reportId,
  userId,
  adminComment,
  mentalMathsComment,
  abilityScore,
  abilityScoreComment
) => {
  return fetch("https://api.parallel.org.uk/graphql", {
    headers: {
      authorization: auth_token,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: "euclidReportCommentAdminMutation",
      query:
        "mutation euclidReportCommentAdminMutation(\n  $input: EuclidReportCommentAdminInput!\n) {\n  updateEuclidReportCommentAdmin(input: $input) {\n    id\n    updatedAtTimestamp\n    reportId\n    userId\n    visibleFrom\n    tutorComment\n    attitudeScore\n    adminComment\n    mentalMathsComment\n    abilityScore\n    attendanceScore\n    attendanceScoreOverride\n    homeworkScore\n    homeworkScoreOverride\n  }\n}\n",
      variables: {
        input: {
          reportId: reportId,
          userId: userId,
          adminComment: adminComment,
          abilityScoreComment: abilityScoreComment,
          mentalMathsComment: mentalMathsComment.split('\n').join('\n'),
          abilityScore: abilityScore.toLowerCase(),
        },
      },
    }),
    method: "POST",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((res) => {
        if(res.data.updateEuclidReportCommentAdmin.id) {
            console.log("success", res.data.updateEuclidReportCommentAdmin.id)
        } else {
            process.exit();
        }

    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
};

const run = async () => {
  const file = path.join(__dirname, `../private/tmp-users.json`);
  const accounts = JSON.parse(fs.readFileSync(file)).users;

  const data = await csv().fromFile(
    "/Users/drew/Downloads/m3+drewdec15 (1).csv"
  );

  const parsed = data.map((d) => {
    if (
      !d["Parallel email"] ||
      !d["Mental maths comment"] ||
      !d["Ability Grade"] ||
      !d["Ability comment"]
    ) {
      console.log("bad", d);
      process.exit();
    }

    const id = accounts.find((a) => a.email === d["Parallel email"]).localId;

    if (!id) {
      console.log("no id", d);
      process.exit();
    }

    const reportId = reportMap[id];

    if (!reportId) {
      console.log("no report", d);
      process.exit();
    }

    return {
      id,
      reportId,
      mentalMaths: d["Mental maths comment"],
      abilityGrade: d["Ability Grade"],
      abilityComment: d["Ability comment"],
    };
  });

  for (const p of parsed) {
    await send(
      p.reportId,
      p.id,
      '',
      p.mentalMaths,
      p.abilityGrade,
      p.abilityComment,
    );
  }

  process.exit();
};

run();
